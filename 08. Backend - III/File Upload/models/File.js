const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

require('dotenv').config();

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
})

// post mmiddleware
fileSchema.post("save", async function(doc){
    try{
        // doc ma Database ni entry aave 
        console.log("DOC: ", doc)

        // create transporter -> shift this configuration under config folder
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: { 
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        // send mail
        let info = await transporter.sendMail({
            from: `CodeHelp - by Babbar`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary",
            html: `<h2>Hello JEE</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
        })

        console.log("Send Mail Info: ", info);
    }
    catch(err){
        console.error(err)


    }
})

const File = mongoose.model('File', fileSchema)
module.exports = File;