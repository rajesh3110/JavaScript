var StudentData
=
{

firstname:"Rajesh",
lastname:"Bhosale",

fullname:function()
{
    return this.firstname+" "+this.lastname;

}


}

console.log(StudentData.fullname());



var masterdata
=
{

    id:"102",
    name:"Ganesh",
    infodaa:function()
    {
        return this.id+" "+ this.name;
    }
}


console.log(masterdata.infodaa());


function data(arg1,agr2)
 {
     this.f=arg1;
     this.s=agr2;
 }


 var r=new data("Rajesh","Bhosale");
console.log(r.f);

console.log(r.s);