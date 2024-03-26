const express = require('express')

const router = express.Router();

// define controller
const {imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require('../controllers/fileUpload');

// define routes
router.post('/imageUpload', imageUpload)
router.post('/videoUpload', videoUpload)
router.post('/imageReducerUpload', imageReducerUpload)
router.post('/localFileUpload', localFileUpload)


module.exports = router;