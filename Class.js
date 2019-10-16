class rajesh 
{
    log()
    {
        console.log("parent");
    }




}
class bhosale extends rajesh
{
    log1()
    {
        console.log("child");
    }
}

var b=new bhosale();
console.log(b.log());
console.log(b.log1());