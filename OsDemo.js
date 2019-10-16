

var oss=require('os');


var fre=oss.freemem();
console.log(fre);
var hom=oss.homedir();
var plt=oss.platform();

var re=oss.release();
var tm=oss.tmpdir();
var upt=oss.uptime();
var us=oss.userInfo();
var totla=oss.totalmem();

console.log(re);
console.log(plt);
console.log(hom);

console.log(tm);
console.log(upt);

console.log(us);
console.log(totla);



