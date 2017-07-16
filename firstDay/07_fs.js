const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico"){
        return;
    }
    res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'})
    fs.readFile("./firstDay/asstes/fs.txt",{"charset":"utf-8"},(err,data)=>{
        if(err){
            throw err;
        };
        console.log(err)
        res.end(data)
    })
});

server.listen(3000,'127.0.0.1');