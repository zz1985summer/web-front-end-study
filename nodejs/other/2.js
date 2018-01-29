let str='';
for(let i=1;i<10;i++){
    for(let j=1;j<=i;j++){
        str+=`${j}*${i}=${i*j}  `;

    }
    str+='\r\n';
}

console.log(str);