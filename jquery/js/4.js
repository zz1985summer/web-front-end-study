var zzLib={}        //函数库，避免全局污染,zzLib命名空间对象

zzLib.max=function(arr){
    var result=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>result){
            result=arr[i];
        }
    }

    return result;
}


zzLib.min=function(arr){
    var result=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<result){
            result=arr[i];
        }
    }

    return result;
}