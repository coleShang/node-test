var http = require("http");
var fs= require("fs");

var server = http.createServer((req,res)=>{
    //不处理小图标
    if(req.url == "/favicon.ico"){
       return;
    }
    // fs.mkdir('./test/test',()=>{
    //     console.log('呵呵')
    // });
    fs.stat("./asstes",(err,stats)=>{
        console.log(stats);
    })
    res.end();
})
server.listen(3000,'127.0.0.1');