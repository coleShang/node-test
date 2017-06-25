const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        //纯文本 text/plain
        'Content-Type':'text/html;charset=utf-8'
    })
    res.write("<h1>主标题</h1>");
    res.write("<h2>2标题</h2>");
    res.end("<h3>11111111</h3>");
});

server.listen(3000,'127.0.0.1');