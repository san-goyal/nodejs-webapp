const routes = require('express').Router();

routes.get("/", (req,res) => {
    res.setHeader("Content-Type", 'text/html')
    res.write("base soap GET request received");
    res.end();
});

routes.post("/attach", (req, res) => {
    body = req.body;
    res.write("in post attach method");
    res.end();
})

module.exports = routes;