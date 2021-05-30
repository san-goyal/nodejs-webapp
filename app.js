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