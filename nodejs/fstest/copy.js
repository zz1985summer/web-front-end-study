const fs=require('fs');
let data=fs.readFileSync('./css/4.css');

fs.writeFileSync('./css/4copy.css',data,(err)=>{
    if(err)
        throw err;
});
