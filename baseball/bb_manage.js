var fs = require('fs');
var exec = require('child_process').exec;

var date = new Date() + 9;
var reset_bb = function() {
//  exec('python ./baseball/create_w.py',function callback(error, stdout, stderr)  {
//    console.log(stdout);
    var n = 10;
    var length = 5;
    var ar = new Array();
    var tmp;
    var rnum;
    for(var i = 0; i < n; i++)
      ar.push(i);
    for(var i = 0; i < n; i++)
    {
      rnum = Math.floor(Math.random() * n);
      tmp = ar[i];
      ar[i] = ar[rnum];
      ar[rnum] = tmp;
    }
    var s = "";
    for(var i = 0; i < length; i++)
      s += ar[i]; 
    fs.writeFile('./baseball/answer.txt', s, function(err) { if(err) throw err; });
    return s;
}

var setlog_bb = function() {
  fs.writeFile('./baseball/lastlog.txt', Date() + 9, function(err) {
    if(err) throw err;
  });
  return Date() + 9;
}

var read_bb = function() {
  var data = fs.readFileSync('./baseball/answer.txt', 'utf8');
  return data;
}

var readlog_bb = function() {
  var data = fs.readFileSync('./baseball/lastlog.txt', 'utf8');
  return data;
}

module.exports = {
reset_bb : reset_bb,
setlog_bb : setlog_bb,
read_bb : read_bb,
readlog_bb : readlog_bb
};
