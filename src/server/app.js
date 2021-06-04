const express = require("express");
const app = express();
const port = 1111;

app.use('/', express.static('./dist', {
    index: "index.html"
}))

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})