const http =  require("http");
const url = require('url');
//querystring (查询字符串)

const server = http.createServer((req,res)=>{
    //识别URL 用到两个模块 一个是URL模块，一个是querystring模块
    let path = url.parse(req.url).pathname;
    let query = url.parse(req.url,true).query;
    let hash = url.parse(req.url).hash;
    console.log(path);
    console.log(query);
    console.log("hash:" + hash)
    res.end();
});
server.listen(3000,'127.0.0.1');