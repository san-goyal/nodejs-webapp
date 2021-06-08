const routes = require('express').Router();
const asyncHandler = require('express-async-handler')
const fs = require('fs');

routes.get("/", (req,res) => {
    res.setHeader("Content-Type", 'text/html')
    res.write("base soap GET request received");
    res.end();
});

// GET localhost:1111/soap/isRunning
// Response: 200 server is running
routes.get("/isRunning",asyncHandler(async (req, res) => {

    const methodRes = () => {
        return new Promise(async (resolve, reject) => {

            const soap = require('soap');
            const url = 'http://admscsb1-d.andritz.com:8080/soapWebService/api?wsdl';

            soap.createClient(url, function(err, client) {
                client.isAlive({}, function(err, result) {
                    if(result){
                        console.log(result);
                        resolve(result.return);
                    }
                    else{
                        reject(err);
                    }
                });
            });
        });
    };

    const soapResponse = await methodRes();
    res.write(soapResponse);
    res.end();
}));


routes.post("/attach", asyncHandler(async (req, res) => {
    body = req.body;

    const methodRes = (soapBody) => {
        return new Promise(async (resolve, reject) => {
            if(soapBody){

                const soap = require('soap');
                const url = 'http://admscsb1-d.andritz.com:8080/soapWebService/api?wsdl';

                const binary = fs.readFileSync("D:\\O365\\test-webapp-node-request\\routes\\san_20210608.txt");
                console.log("Data length " + binary);

                soap.createClient(url, function(err, client) {
                    client.archiveDocument(soapBody, function(err, result, rawResponse, soapHeader, rawRequest) {
                        if(result){
                            console.log(result);
                            resolve(result.documentUUID);
                        }
                        else{
                            console.log(err);
                            reject(err);
                        }
                    },
                    {
                        attachments: [{
                            mimetype: "application/pdf",
                            contentId: "35mb.pdf",
                            name: "35mb.pdf",
                            body: binary
                        }]
                    });
                });

                //resolve("body received");
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