
const express = require('express')
const app = express()

require('dotenv').config()
PORT = process.env.PORT || 4000;

app.use(express.json())

// cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())

require('./config/database').dbConnet();

// routes import and mount
const user = require('./routes/user')
app.use('/api/v1', user)


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`<h1>Home Page Baby...</h1>`)
})
