
// authenticity check -> auth middleware
// student athorization -> isStudent middleware
// admin athorization -> isAdmin middleware

const jwt = require('jsonwebtoken')
require("dotenv").config()


exports.auth = (req, res, next) => {
    try{
        // extract the JWT Token -> can fetch from headers, cookeie and body
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        console.log("cookie token: ", req.cookies.token)
        console.log("body token: ", req.body.token)
        console.log("Header token: ", req.header("Authorization"))

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token Missing..."
            })
        }

        // verified the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            console.log("Payload  Token: ", payload)

            req.user = payload;
        }
        catch(err){
            return res.status(401).json({
                success: false,
                message: "Token is Invalid..."
            })
        }

        next();
    }
    catch(err){
        console.error(err)

        return res.status(401).json({
            success: false,
            message: "Something went wrong, while verifing the token...",
            err: err.message
        })
    }
}


exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is protected route for The Students..."
            })
        }
        next();
    }
    catch(err){
        console.error(err)

        return res.status(500).json({
            success: false,
            message: "User role is not matching..."
        })
    }
}


exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is protected route for The Admin..."
            })
        }
        next();
    }
    catch(err){
        console.error(err)

        return res.status(500).json({
            success: false,
            message: "User role is not matching..."
        })
    }
}