const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8000

app.listen(port, () => console.log('server'))

const mongoDBURL = 'mongodb+srv://vikhulei:A45bmc7@devconnector.rxhfh.mongodb.net/viktor?retryWrites=true&w=majority&appName=DevConnector';
 
//connect to Database
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection Successfull") })
    .catch((err) => { console.log("Received an Error") })