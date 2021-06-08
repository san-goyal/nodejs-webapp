const routes = require('express').Router();
const asyncHandler = require('express-async-handler')

routes.get("/", (req,res) => {
    res.setHeader("Content-Type", 'text/html')
    res.write("base soap GET request received");
    res.end();
});

routes.post("/attach", asyncHandler(async (req, res) => {
    body = req.body;

    const methodRes = (soapBody) => {
        return new Promise(async (resolve, reject) => {
            if(soapBody){
                resolve("body received");
            }
            else{
                reject("body is empty");
            }
        });
    };

    const soapResponse = await methodRes(body);
    res.write(soapResponse);
    res.end();
}));

module.exports = routes;