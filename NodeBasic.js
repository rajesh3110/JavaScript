

function log(message)
{
     console.log(message);

}

module.exports.log=log;





function data(name,clg)
{

    console.log(name+"  from the "+clg);
}

module.exports.data=data;




function studentdata(Rollnumber,StudentName,Phonenumber)
{

    console.log("Id = "+Rollnumber+" Name = "+StudentName+ " Phone number = "+Phonenumber);
}

module.exports.studentdata=studentdata;
