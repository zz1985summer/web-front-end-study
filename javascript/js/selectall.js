var chbAll=document.querySelector("thead input[type=checkbox]");

var chbs=document.querySelectorAll("tbody td:first-child>input");

chbAll.onclick=function(){
    for(var i=0;i<chbs.length;i++){
        chbs[i].checked=this.checked;
    }
};

for(var i=0;i<chbs.length;i++){
    chbs[i].onclick=function(){
       if(!this.checked){
           chbAll.checked=false;
       }else{
           var unchecked=document.querySelector("tbody td:first-child>input:not(:checked)");

           if(unchecked==null){
               chbAll.checked=true;
           }
       }
    }
}