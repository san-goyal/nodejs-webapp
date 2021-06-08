const express = require('express');
const routeSoap = require('./routes/soapAPI.js');

const app = express();
const port = 1111;

app.get("/",(req,res)=> {
    console.log("request received");
    res.send("Hello, Sandy!");
});

app.use("/soap", routeSoap);

app.listen(port, function(){
    console.log("Server listening on port 1111");
});