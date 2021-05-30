const http = require('http');

const routes = require("./routes");

http
.createServer(routes)
.listen(1111);
console.log("Server listening on port 1111");

// createServer() method creates a server and accepts a requestListener function
// that has two parameters: HTTP request(req) and response(res)