const http = require("http")

// request can be used to store - url, request header, data

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("Hello World!");
    }
    else if(req.url == "/about"){
        res.end("About Page!");
    }
    else{
        res.writeHead(200, {"Content-type" : "text/html"});
        res.end("<h1>Hello Other World!</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to web server");
});