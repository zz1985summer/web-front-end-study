const mysql=require('mysql');

let conn=mysql.createConnection({
    host:'192.168.50.107',
    user:'root',
    password:'root',
    database:'jd',
    port:'3306'
});

/*conn.query(`INSERT INTO jd.emp VALUES(NULL,'Mike',7700,'2018-10-11',3)`,(err,result)=>{
    console.log('sql complete');
    console.log(result);
    console.log(err);
});*/

conn.query('INSERT INTO emp VALUES(NULL,?,?,?,?)',['Mickey',8888.05,'1982-10-11',3],(err,result)=>{
    console.log('sql complete');
    console.log(result);
    console.log(err);
});

conn.end();
console.log('js complete');