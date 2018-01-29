const fs=require('fs');
/*fs.writeFile('mydemo.txt','This is my text',(err)=>{
    if(err) throw err;
    console.log('Replaced!');
});*/

console.log(fs.readFileSync('mydemo.txt').toString());