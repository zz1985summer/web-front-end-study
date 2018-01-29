let sum=function (arr){
    let total=0;
    for(let a of arr){
        //console.log(a);
        total+=a;
    }
    //console.log(total);
    return total;
};

let avg=function (arr){
    let avger=0;
    let total=0;
    for(let a of arr){
        total+=a;
    }
    avger=total/arr.length;


    return avger;
};

module.exports.sum11=sum;
exports.avg11=avg;