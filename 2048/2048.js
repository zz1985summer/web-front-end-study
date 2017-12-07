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
    randomNum();randomNum();
    updateView();
    //为当前页面添加按下事件
    document.onkeydown=function(e){
        switch(e.keyCode){
            case 37:
                moveLeft();
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
                break;
        }
    }

    console.log(data.join("\n"));
}

function moveLeft(){
   var before=String(data);
   for(var r=0;r<RN;r++){
       moveLeftInRow(r);
   }
   var after=String(data);
    if(before!=after){
        randomNum();
        updateView();
    }
}

function moveLeftInRow(r){
    for(var c=0;c<CN-1;c++){
        var nextc=getNextcInRow(r,c);
        if(nextc==-1){
            break;
        }else {
            if(data[r][c]==0){
                data[r][c]=data[r][nextc];
                data[r][nextc]=0;
                c--;
            }else if(data[r][c]==data[r][nextc]){
                data[r][c]*=2;
                data[r][nextc]=0;
            }
        }
    }
}

function getNextcInRow(r,c){
    for(var nextc=c+1;nextc<CN;nextc++){
        if(data[r][nextc]!=0){
            return nextc;
        }
        return -1;
    }
}



function updateView(){
    //遍历data
    for(var r=0;r<RN;r++){
        for(var c=0;c<RN;c++){
            var id="c"+r+c;
            //用id找到对应的div
            var div=document.getElementById(id);
            if(data[r][c]!=0){
                div.innerHTML=data[r][c];
                div.className="cell "+"n"+data[r][c];
            }else{
                div.innerHTML="";
                div.className="cell";
            }
        }
    }
}

//在data中一个随机位置生成2或4
function randomNum(){
    var r=parseInt(Math.random()*RN);
    var c=parseInt(Math.random()*CN);
    if(data[r][c]==0){
        data[r][c]=Math.random()<0.5?2:4;
    }
}
start();