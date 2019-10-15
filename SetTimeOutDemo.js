console.log("Printing the Fibo serie in 2 min Plz Wait ");


setTimeout(fibo,2000);



function fibo()
{
    var a=0;
    var b=1;
    var c=0;

    console.log(a+" "+b);

    for(var i=0;i<=5;i++)
     {
         c=a+b;
         a=b;
         b=c;
         console.log(c);
     }


}
console.log("Addition of two in Process Plz Wait :: ");


setTimeout(add,2000);


function add()
 {
     var a=34;
     var b=43;
     return "Addtion of Two = "+(a+b);
 }