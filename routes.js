
const requestListener = (req, res) => {

    //console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.setHeader("Content-Type", 'text/html')
        res.write("<html>");
        res.write("<head><title>All the Feels</title></head>");
        res.write(
        '<body><h1>Hey there, welcome to the mood tracker!</h1><p>Enter your mood below and hit submit to save your mood.</p><form action = "/mood" method="POST"><input type = "text" name="mood"><button type = "submit">Send</button></body>'
        );
        res.write("</html>");
        res.end();
    }

    if(url === "/mood" && method === "POST"){
        const body = [];

        req.on("data", (chunk)=> {
            body.push(chunk);
        });

        const endTrigger = req.on("end", ()=> {
            const parsedBody = Buffer.concat(body).toString();
            const mood = parsedBody.split("=")[1];
            console.log("Mood of user is ", mood);
            res.write("Mood : " + mood);
            return res.end(); //return statement needed?
        });
        return endTrigger; //Response works fine without both return statement
    }
}

module.exports = requestListener;