const fs = require('fs');

const requestListener = (req, res) => {

    console.log("request received");

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write("Hello, Sandy!");
        return res.end();
    }
}

module.exports = requestListener;