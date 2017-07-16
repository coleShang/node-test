let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer((req,res)=>{
    //得到用户的路径
    let pathName = url.parse(req.url).pathname;

    fs.readFile('./firstDay/assets' + pathName,(err,data)=>{
        if(err){
            //如果不存在应该404返回
            throw err;
            return;
        };
        req.end(data);
    });
}).listen(3000,"127.0.0.1");