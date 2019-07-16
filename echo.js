
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

var get_id = function(id, time) {
  var data = [id,time,time];
  connection.query('INSERT INTO whole_id VALUES(?,?) ON DUPLICATE KEY UPDATE time=?',data,function(err,result){
    if(!err){
	//
    }
    else {throw err;}
  });
}

var echo_in = function(key,msg,time) {
  // connection.connect();
  var msg_ = "";
  for(var i = 0; i < msg.length; i++)
  {
    // console.log(msg.charCodeAt(i));
    if(msg.charCodeAt(i) > 55215)
      continue;
    msg_ += msg[i];
  }
  //  msg = msg.replace(/[\u7AF-\uFFF]/g, '');
  var data = [key,msg_,time,msg_,time];
  // console.log(data);
  connection.query('INSERT INTO echo VALUES(?,?,?,0) ON DUPLICATE KEY UPDATE  msg=?, time=?, empty=0',data,function(err,result){
    if(!err){
	// console.log(result);
    }
    else {throw err;}
  });

  // connection.end();
};

var echo_out = function(callback) {
  // connection.connect();
  connection.query( ('SELECT msg from echo where empty=0 order by rand() limit 1'),function(err,rows,fields){
    if(err) throw err;
    else{
      ret = JSON.stringify(rows);
      ret = JSON.parse(ret);
      ret = ret[0].msg;
      callback(ret);
    } 
  });
  // connection.end();
  //return ret;
}

var echo_del = function(key){
  // connection.connect();
  
  connection.query("update echo set empty=1  where id=?",key,function(err,rows){
    if(err) throw err;
    else{
      // console.log(rows);
    }
  });

  // connection.end();
}

var echo_delete_all = function(){
  // connection.connect();

  connection.query("delete from echo",function(err,rows){
    if(err) throw err;
  });
  connection.query("insert into echo values(testid,lucky,1)",function(err,rows){
    if(err) throw err;
    else console.log("everything deleted");
  });
}

var bb_check = function(key,callback) {
  // connection.connect();
  connection.query( ('SELECT trial from bb where id=?'),key,function(err,rows,fields){
    if(err) throw err;
    else{
      ret = JSON.stringify(rows);
      ret = JSON.parse(ret);
      if(!ret.length)
	ret = -1;
      else
	ret = ret[0].trial;
      // console.log(ret);
      callback(ret);
    } 
  });
  // connection.end();
  //return ret;
}

var bb_trial_add = function(key) {
  connection.query( ('update bb set trial=trial+1 where id=?'), key, function(err,rows) {
   if(err) throw err;
  });
}

module.exports = {
 connection : connection,
 echo_in : echo_in,
 echo_out : echo_out,
 echo_del : echo_del,
 echo_delete_all : echo_delete_all,
 get_id : get_id,
 bb_check : bb_check,
 bb_trial_add : bb_trial_add
};
 
