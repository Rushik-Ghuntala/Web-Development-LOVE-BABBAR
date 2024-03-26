const File = require('../models/file')
const cloudinary = require('cloudinary').v2

// local file upload -> handler function

exports.localFileUpload = async(req, res) => {
    try{
        // fetch file from request
        const file = req.files.file;
        console.log('File agayi jee --> ',file)

        // create the path where file need to be stored on server
        let path = __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path --> ", path);

        // add path to the move function
        file.mv(path, (err) => {
            console.log(err);
        })

        res.json({
            success: true,
            message: "Local file uploded successfully..."
        })
    }
    catch(err){
        console.log(err)

        res.json({
            success: false,
            message: "Issue in Local File Uploaded..."
        })
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder}
    options.resource_type = 'auto';

    if(quality){
        options.quality = quality;
    }


    return await cloudinary.uploader.upload(file.tempFilePath, options)
}

// imageUpload handler

exports.imageUpload = async(req, res) => {
    try{
        // data fetch
        const {name, tags, email} = req.body;
        console.log(name, tags, email)

        const file = req.files.imageFile;
        console.log("File: ", file)

        // validation
        const supportedTypes = ['jpg', 'png', 'jpeg'];

        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported..."
            })
        }

        // file format is supported then upload in cloudinary

        const response = await uploadFileToCloudinary(file, "CodeHelp");
        console.log("Response: ", response)

        // DB me entry save karni hai 
        const fileData = await File.create({
            name,
            tags, 
            email, 
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imagaUrl: response.secure_url,
            message: "Image Successfully Uploaded..."
        })
    }
    catch(err){
        console.log(err)

        res.json({
            success: false,
            message: "Issue in Image File Uploaded..."
        })
    }
}


// video upload handler

exports.videoUpload = async(req, res) => {
    try{
        // data fetch
        const {name, tags, email} = req.body;
        console.log(name, tags, email)

        const file = req.files.videoFile;
        console.log("File: ", file)

        // validation
        const supportedTypes = ['mp4', 'mov'];

        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported..."
            })
        }

        // file format is supported then upload in cloudinary

        const response = await uploadFileToCloudinary(file, "CodeHelp");
        console.log("Response: ", response)

        // DB me entry save karni hai 
        const fileData = await File.create({
            name,
            tags, 
            email, 
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video Successfully Uploaded..."
        })
    }
    catch(err){
        console.log(err)

        res.json({
            success: false,
            message: "Issue in Video File Uploaded..."
        })
    }
}

// image reduce upload handler

exports.imageReducerUpload = async(req, res) => {
    try{
        // data fetch
        const {name, tags, email} = req.body;
        console.log(name, tags, email)

        const file = req.files.imageFile;
        console.log("File: ", file)

        // validation
        const supportedTypes = ['jpg', 'png', 'jpeg'];

        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File format not supported..."
            })
        }

        // file format is supported then upload in cloudinary

        const response = await uploadFileToCloudinary(file, "CodeHelp", 30);
        console.log("Response: ", response)

        // DB me entry save karni hai 
        const fileData = await File.create({
            name,
            tags, 
            email, 
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imagaUrl: response.secure_url,
            message: "Image Successfully Uploaded..."
        })
    }
    catch(err){
        console.log(err)

        res.json({
            success: false,
            message: "Issue in Video File Uploaded..."
        })
    }
}