

class B
{
    add()
    {
       const a=10;
       const b=20;
       console.log(a+b); 
    }
}

class A extends B
{

    sub()
    {
        const a1=40;
        const b1=30;
        console.log(a1-b1);
    }
}

var aooo=new A();
console.log(aooo.sub());


console.log(aooo.add());


