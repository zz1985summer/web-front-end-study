if(!window.jQuery){
    throw new Error('5.js依赖于jquery.js');
}


jQuery.max=function(arr){
    var result=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>result){
            result=arr[i];
        }
    }

    return result;
}


jQuery.min=function(arr){
    var result=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<result){
            result=arr[i];
        }
    }

    return result;
}