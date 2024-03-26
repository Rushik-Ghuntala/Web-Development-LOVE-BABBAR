const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken')

require('dotenv').config();

// signup route handler
exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;

    // check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists...",
      });
    }

    // secure password
    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } 
    catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error in Hashing Password...",
      });
      // try to make retry for 3 times after then give it to Error in Hashing...
    }
    
    // create the user 
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(200).json({
      success: true,
      data: user,
      message: "User is Created Successfully..."
    })
  } 
  catch (err) {
    console.error(err.message)

    res.status(500).json({
      success: false,
      err: err.message,
      message: "User cannot be Registered, Please Try Again Later..."
    })
  }
};


// login handler
exports.login = async(req, res) => {
  try{
    // data fetch
    const {email, password} = req.body;

    // validation on email and password
    if(!email || !password){
      return res.status(400).json({
        success: false,
        message: "Please fill all the details carefully... "
      })
    }

    // check for registered user
    let user = await User.findOne({email})

    // if user is not register
    if(!user){
      return res.status(401).json({
        success: false,
        message: "User is not Registered..."
      })
    }

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role
    };

    // verify password and generate JWT Token
    if(await bcrypt.compare(password, user.password)){
      // if password matched 

      // -> crete JWT Token
      let token = jwt.sign(
        payload, 
        process.env.JWT_SECRET,
        {
          expiresIn: "2h"
        }
      );

      // user ko object me convert kardo
      user = user.toObject();

      // user k object me token add kar dia
      user.token = token;

      // user ke object mese password hata dia.. database me still available hai
      user.password = undefined;

      // -> create Cookie
      const options = {
        expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User Logged in Successfully..."
      });
      // res.status(200).json({
      //   success: true,
      //   token,
      //   user,
      //   message: "User Logged in Successfully..."
      // });

    }
    else{
      // if password do not matched
      return res.status(403).json({
        success: false,
        message: "Password Incorrect..."
      })
    }
  }
  catch(err){
    console.error(err.message)

    res.status(500).json({
      success: false,
      message: "Login Failed..."
    })
  }
}
