const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    fs.readFile('./firstDay/index.html',(err,data)=>{
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        res.end(data);
        console.log(data)
    });
    console.log(11)
});

server.listen(3000,"127.0.0.1");