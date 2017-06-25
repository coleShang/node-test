const http =  require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
    res.end('这是我的第一个');
    console.log(1111)
})

server.listen(3000,"127.0.0.1");