const http=require('http');
const fs=require('fs');
const mysql=require('mysql');
const url=require('url');
let pool=mysql.createPool({
    host:'192.168.50.107',
    user:'root',
    password:'root',
    database:'tmooc'
});
http.createServer((req,res)=>{
    let reqStr=url.parse(req.url,true);
    if(reqStr.pathname==='/add'){
        fs.readFile('./stu/add.html',(err,data)=>{
            if(err)throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }else if(reqStr.pathname==='/add.do'){
        let queryObj=reqStr.query;


        pool.getConnection((err,conn)=>{
            if(err)throw err;

            conn.query('INSERT INTO tmooc.stu VALUES(NULL,?,?,?)',[queryObj.uname,queryObj.score,queryObj.schoolTime],(err,result,fields)=>{
                if(err)throw err;

                console.log();

                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.write('<h1>添加成功,记录编号为:</h1>'+result.insertId);
                res.end();
                conn.release();
            });
        });



    }else if(reqStr.pathname==='/list'){
        pool.getConnection((err,conn)=>{
            if(err)throw err;

            conn.query('SELECT * FROM stu',(err,result)=>{
                if(err)throw err;

                res.writeHead(200,{'Content-Type':'application/json'});
                res.write('<h1>学生清单：</h1><br>');
                let str=JSON.stringify(result);
                res.write(str);
                res.end();
                conn.release();
            });


        });


    }else{
        res.statusCode=404;
        res.writeHead(404,{'Content-TYpe':'text/html'});
        res.write(`<h1>${res.statusCode} PAGE NOT FOUND</h1>`);
        res.end();
    }
}).listen(4000);