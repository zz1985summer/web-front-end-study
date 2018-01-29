const PI=3.14;
let getSize=function (r){
    return PI*r*r;
};

let getPerimiter=function (r){
    return 2*PI*r;
};

exports.getSize=getSize;
exports.getPerimiter=getPerimiter;