var mysql=require('mysql');

var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'reactiveform2'
});

module.exports=connection;