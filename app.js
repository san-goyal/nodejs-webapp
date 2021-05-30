const express = require('express');
const app = express();
const port = 1111;

app.get("/",(req,res)=> {
    console.log("request received");
    res.send("Hello, Sandy!");
});

app.listen(port, function(){
    console.log("Server listening on port 1111");
});

/* BASIC SERVER WITH HTTP

const http = require('http');

http
.createServer((request,response)=>{
    console.log("request received");
    response.writeHead(200, { 'Content-type':'text/plain'});
    response.write("Hello, Sandy!");
    response.end();
})
.listen(1111);
console.log("Server listening on port 1111");
*/