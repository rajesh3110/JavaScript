


const EventEmitter=require('events');

var emitter=new EventEmitter();


emitter.addListener('message',function()//using Addlistenerrr
{
    console.log("Listener Logged ");

});


emitter.emit('message');



emitter.on("rajesh",function()//using On 
{
    console.log("Rajesh Called ");

});

emitter.emit("rajesh");



emitter.on("Rohan",function()
{
console.log("Rohan Called");
});

emitter.emit("Rohan");



