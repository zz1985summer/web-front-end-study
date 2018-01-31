const express=require('express');
const path=require('path');

let app=express();
app.listen(8000,()=>console.log('Express is listening on 8000'));
//设置静态文件目录
console.log(path.join(__dirname,'../public'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/login',(req,res)=>{
    let filepath=__dirname.substring(0,(__dirname.lastIndexOf('\\')+1));

    res.sendFile(filepath+'pages/login.html');
});

app.post('/login.do',(req,res)=>{
    console.log(req.query.uname);
    console.log(req.query.password);
});