

setTimeout(Callchild,2000);
console.log("Printing the CHild data : ");

function Callchild()
{
   
 console.log("Rajesh Thread");     
  

}

setTimeout(ParentClass,2000);
console.log("Printing the Parent data : ");

function ParentClass()
{
   
 console.log("bhosale Thread");     
  

}

setTimeout(demo,1100,"Rajesh","Bhosale");

function demo(f,l)
 {
     console.log(f+" "+l);
 }