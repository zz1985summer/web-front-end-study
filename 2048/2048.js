var RN=4,CN=4;    //总行数,总列数
var data;       //定义二维数组
function start(){
    data=[];
    for(var r=0;r<RN;r++){
        data.push([]);      //空二维数组
        for(var c=0;c<CN;c++){
            data[r][c]=0;
        }
    }
    console.log(data.join("\n"));
}

function randomNum(){

}
start();