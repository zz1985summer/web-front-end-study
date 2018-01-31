const http=require('http');
const url=require('url');
const fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    let urlObj=url.parse(req.url,true);
    console.log(urlObj);
    let path=urlObj.pathname;


    if(path==='/login'){
        fs.readFile('./public/login.html',(err,data)=>{
            if(err) throw err;
            res.write(data.toString());
            res.end();
        });
    }else if(path==='/index'){
        fs.readFile('./public/index.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path==='/product'){
        fs.readFile('./public/product.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path==='/register'){
        fs.readFile('./public/register.html',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path==='/register.do'){
            let qObj=urlObj.query;
            let uname=qObj.uname;
            let upwd=qObj.upwd;
            res.write(`<h1>提交的用户名是:${uname},密码是:${upwd}</h1>`);
            res.end();

    }else{
        res.statusCode=404;
        res.write(`<h1>${res.statusCode} 您请求的内容不存在<h1/>`);
        res.end();
    }


}).listen(8000);