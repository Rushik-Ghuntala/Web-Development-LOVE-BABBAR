const mongoose = require('mongoose')

require('dotenv').config()

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB ka connection is Successfully..."))
    .catch((err) => {
        console.log("DB ka Connection failed...")
        console.error(err)
        process.exit(1)
    })
}