

// require matlab import
// express name ka variable me express ko require/import kardo
const express = require("express")

// create backend application using exress
const app = express();

// hamari application ka address provide karna padta hain jisko PORT kahte hai
const PORT = 3000;


// adding middleware
app.use(express.json())

// Routes
// get request
app.get('/', (req, res) => {
    res.send(`<h1>Hello Jeee.. This is Home Page Baby...</h1>`)
})

// aplication ko listen karvado PORT number pe
app.listen(PORT, () => {
    console.log(`Server is Started at ${PORT}`)
})
