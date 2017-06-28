const http = require("http");

const server = http.createServer((req,res)=>{
        //得到URL
        let userUrl = req.url;
        res.writeHead(200,{'Content-Type':'text/html,charset=utf-8'})
        if(userUrl.substr(0,9) === "/student/"){
            let studentId =  userUrl.substr(9);
            console.log(studentId);
            if(/^\d{10}$/.test(studentId)){
                res.end("你要查询的学生信息，ID为"+ studentId)
            }else{
                res.end("学生学号位数不对")
            }
        }else if(userUrl.substr(0,9) === "/teacher/"){
            let teacherId =  userUrl.substr(9);
            if(/^\d{6}$/.test(teacherId)){
                res.end("你要查询的老师信息，工号为"+ teacherId)
            }else{
                res.end("老师工号位数不对")
            }
        }else{
            res.end("请检查url")
        }
    });

server.listen(3000,'127.0.0.1')