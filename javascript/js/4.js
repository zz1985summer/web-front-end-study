//1.找触发事件的元素,绑定事件
var spans=document.querySelectorAll(".tree span");
for(var i=0;i<spans.length;i++){
    spans[i].onclick=function(){
        if(this.className=="open"){
            this.className="";
        }else{
            var span=document.querySelector(".tree span.open");
            if(span!==null){
                span.className="";
            }
            this.className="open";
        }
    }
}