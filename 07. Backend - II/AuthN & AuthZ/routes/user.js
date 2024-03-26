const express = require('express')
const router = express.Router()

const {login, signup} = require('../controllers/Auth')
const { auth, isStudent, isAdmin } = require('../middlewares/auth')
const User = require('../models/User')

router.post('/login', login)
router.post('/signup', signup)


// testing protected routes for single middleware
router.get('/test', auth, (req, res) => {
    res.json({
        success: true,
        message: " Welcome to the Protected Routes of TEST..."
    })
})

// protected routes
// middleware handler k lie - jo bhi middleware use hoge usko define karne ka hai
router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: " Welcome to the Protected Routes of Students..."
    })
})

router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: " Welcome to the Protected Routes of Admin..."
    })
})

// router.get('/getEmail', auth, async(req, res) => {
//     try{
//         const id = req.user.id;
//         console.log("ID : ", id);

//         const user = await User.findById(id)

//         res.status(200).json({
//             success: true,
//             data: user,
//             message: `${id} is fetched`
//          })
//     }
//     catch(err){
//         console.error(err)

//         res.status(500).json({
//             success:false,
//             message: "Server Error..."
//         })

//     }
// })

module.exports = router;