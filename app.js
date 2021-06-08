const express = require('express');
const bodyparser = require('body-parser'); //allow retrieving body for post routes

const routeSoap = require('./routes/soapAPI.js');

const app = express();
app.use(bodyparser.urlencoded({extended: true})); //Content-type: application/x-www-form-urlencoded
app.use(bodyparser.json()); //Content-type: application/json
app.use(bodyparser.raw()); //Content-type: text/plain

app.get("/",(req,res)=> {
    console.log("request received");
    res.send("Hello, Sandy!");
});

app.use("/soap", routeSoap);

const port = 1111;
app.listen(port, function(){
    console.log("Server listening on port 1111");
});