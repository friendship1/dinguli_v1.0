var corrector = function(num,ans) {
 var ball = 0;
 var strike = 0;
 for(var i = 0; i < ans.length; i++)
 {
  var pos = num.indexOf(ans[i]);
  if(pos != -1 && pos != i)
   ball += 1;
  else if (pos != -1 && pos == i)
   strike += 1;
 }
 return [ball,strike];
}

// console.log(correcter("1234","1253"));
module.exports = {
 corrector : corrector
};
