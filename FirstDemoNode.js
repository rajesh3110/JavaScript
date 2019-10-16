
var hello=()=>
{

    var rm=1002;
    const f=30;
    console.log(f*rm);

}


function byye(callback)
{

    console.log(4*10);
    callback();
}


console.log(byye(hello));






var ol=new Promise(function(r,o)
{
  var tr=false;
  if(tr)
   {
       r("Done");
   }
   else
    {
        o("Fail");
    }

});
ol.then(function(pass)
{
    console.log(pass);

}).catch(function(fail)
{
  console.log(fail);
});








