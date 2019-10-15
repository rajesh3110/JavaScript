



var person
=
{

fullname:function()
{
    return this.fname+" "+this.lname;

}

}



var data1
=
{

    fname:"Rajesh",
    lname:"Bhosale"
}

var data2
=
{
fname:"Sandesh",
lname:"Vyahanreee"
}


console.log(person.fullname.call(data1));

console.log(person.fullname.call(data2));