var mysql = require('mysql');
var connection = mysql.createConnection({
 host : 'localhost',
 user : 'root',
 password : 'mypassword',
 port : 3306,
 database : 'kakao',
 multipleStatements : true,
 supportbignumbers : true
});

var date_ = new Date();

clear_sql = "truncate bb";
copy_sql = "insert into bb(id,trial) select id,0 from whole_id";

connection.query(clear_sql,function(err, result){
 if(!err){
 }
 else {throw err;}
});
connection.query(copy_sql,function(err, result){
 if(!err){
 }
 else {throw err;}
});

connection.end();
