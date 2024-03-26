const cloudinary = require('cloudinary').v2;

require('dotenv').config()

exports.cloudinaryConnect = async() => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })
        console.log("Cloudinary Connection Successfully...")
    }
    catch(err){
        console.log("Error in cloudinary config...")
        console.log(err)
    }
}