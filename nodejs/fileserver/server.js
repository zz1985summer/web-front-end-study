const http=require('http');
const url=require('url');
const fs=require('fs');


http.createServer((req,res)=>{
    let q=url.parse(req.url,true);
    let filename='./public/'+q.pathname;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 NOT FOUND");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8000);