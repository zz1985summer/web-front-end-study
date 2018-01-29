let resolve=require('./URL_TEST');
let url='http://www.jd.com:80/ad/index?uname=tom&pno=3';
console.dir(resolve.resolve(url));