var mysql = require('mysql');
var connection = mysql.createConnection({
 host : 'localhost',
 user : 'root',
 password : 'mypassword',
 port : 3306,
 database : 'kakao',
 multipleStatements : true
});

var date_ = new Date();
var sec = date_ / 1000;
sec = sec - 604800;
// sec = sec - 10;


echo_flush_sql = "UPDATE echo SET empty = 1 WHERE time < ?";
connection.query(echo_flush_sql,[sec],function(err, result){
 if(!err){
 }
 else {throw err;}
});

connection.end();
