const qs=require('querystring');
const {URL}=require('url');


let str='https://www.jd.com:8080?uname=tom&upwd=123&pno=3&kw=%e8%be%be%e5%86%85';
const myURL=new URL(str);


console.log(myURL.protocol);
console.log(myURL.search)
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.origin);
console.log(myURL.searchParams);


const buf1=Buffer.alloc(10);
console.log(buf1);

const buf2=Buffer.from('三四五');
console.log(buf2);

