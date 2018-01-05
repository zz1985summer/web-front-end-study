if(!window.jQuery){
    throw new Error('5.js依赖于jquery.js');
}


jQuery.fn.max=function(){
    console.log(this);
    var result=arr[0];
    this.each(function(i,obj){
        console.log(this);
        var num=parseInt(obj.innerHTML);
        if(num>result){
            result=num;
        }
    });

    return result;
}


jQuery.fn.min=function(arr){
    var result=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<result){
            result=arr[i];
        }
    }

    return result;
}


jQuery.fn.extend({
    sum:function(){
        var result=0;
        this.each(function(i,obj){
            var num=obj.innerHTML;
            num=parseFloat(num);
            result+=num;
        });
        return result;
    },
    averg:function(){
        var sum=this.sum();
        return sum/this.length;
    }
});