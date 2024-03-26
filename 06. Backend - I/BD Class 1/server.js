//Making instance of express
const express = require('express')

//making single instantiate of express with name of app
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
// specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


// app ko listen karva do PORT number 3000 pe
app.listen(3000 , () => (
    console.log("Server started at PORT number 3000...")
));

// defining khudaka route with HTTP Methods
// app k uper GET method define kardi
// usko route define kardi '/'
// response pe Hello Jee batadiyaaa...
app.get('/', (req, res) => (
    res.send("Hello Jee, This is Love Babbar's Student Rushik Ghuntala")
) )


app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name)
    console.log(brand)
    res.send('Car Submitted Successfully....')
})



// connect my app with MONGODB
const mongoose = require('mongoose')

//this is promise...
// if myDatabase is alredy creted in MONGODB then it is connect with that,
// otherwise it is first create myDatabse and then connected
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser: true,
    useUnifiedTopology: true
})
.then( () => {console.log("Connection Successfully...")})
.catch( (error) => {console.log("Recevied an Error while Connection of MONGODB...")})