const express = require('express')
const app = express();

require('dotenv').config()
app.use(express.json())

PORT = process.env.PORT || 4000;

const fileupload = require('express-fileupload')
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))


// db cnection
const db = require('./config/database')
db.dbConnect();

const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect();

// api routes mount karna h
const Upload = require('./routes/FileUpload')
app.use('/api/v1/upload', Upload)

// activate server
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}...`);
})


// homework->
// forozen -> smtp article vacho
// AWS -> sqs service, sns service vacho
// bov badhi knowledge malse je koi pase nai hoi