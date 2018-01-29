let students=[
    {"id":1,"name":"zhangsan","score":70},
    {"id":2,"name":"lisi","score":80},
    {"id":3,"name":"zhaowu","score":60},
    {"id":4,"name":"wanger","score":77},
    {"id":5,"name":"qianliu","score":99},
];

for(let i=0;i<students.length;i++){
    str=`student's id is:${students[i].id} and suname:${students[i].name} and scroe:${students[i].score}`;
    console.log(str);
}

for(let stu of students){
    str=`${stu.id} and ${stu.name} and ${stu.score}`;
    console.log(str);
}



function fu1(){
    console.log('f1');
}

function fu2(){
    console.log('f2');
}


let path='/index';

if(path==='/index'){
    fu1();
}else if(path==='/login'){
    fu2();
}