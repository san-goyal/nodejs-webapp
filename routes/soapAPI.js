const routes = require('express').Router();

routes.get("/", (req,res) => {
    res.setHeader("Content-Type", 'text/html')
    res.write("<html>");
    res.write("<head><title>All the Feels</title></head>");
    res.write(
    '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Enter your mood below and hit submit to save your mood.</p><form action = "/mood" method="POST"><input type = "text" name="mood"><button type = "submit">Send</button></body>'
    );
    res.write("</html>");
    res.end();
});

module.exports = routes;