const http =require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html,charset=utf-8'
    })
    //得到查询部分，由于写了true,那么就是一个对象
    let queryObject = url.parse(req.url,true).query;
    let name = queryObject.name;
    let age =  queryObject.age;
    let sex = queryObject.sex;
    res.end('服务器收到了表单请求' + name +age +sex);
})
server.listen(3000,'127.0.0.1')