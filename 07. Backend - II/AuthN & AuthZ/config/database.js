const mongoose = require('mongoose')

require('dotenv').config()

exports.dbConnet = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log("DB ka Connection Successfully...")})
    .catch((err) => {
        console.log("DB connection Issue...")
        console.error(err)
        process.exit(1)
    })
}