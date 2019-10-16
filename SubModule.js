


console.log(__filename+"\n");
console.log(__dirname+"\n");


function studentdata
(Rollnumber,name,clg)
{
   
     
     console.log("Rollno = "+Rollnumber+ " Name = "+name+" Clg = "+clg+"\n");

}


function teachedata(teacherid,name,address)
{


    console.log("Id = " +teacherid+" Name = "+name+" Address = "+address+"\n");
}

   function fun()
    {
        console.log("From R Class From Fun()");
    }

module.exports.fun=fun;


module.exports.studentdata=studentdata;

module.exports.teachedata=teachedata;


var exportvar="Exported Variable ::  ";

module.exports.exportvar=exportvar;
