


const htpdemo=require('http');

const server=htpdemo.createServer();


server.on('connection',(socket)=>
{
 console.log("New Connnection :: ");
});
server.listen(3000);


console.log("Listening Port 30000");