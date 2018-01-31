const express=require('express');
const fs=require('fs');

let app=express();
app.get('/login',(req,res)=>{
    let file=__dirname+'/login/login.html';
    res.sendFile(file);
});
app.listen(4000,()=>console.log('Example app listening on port 4000!'));
