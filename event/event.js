//import the event module
const eventEmitter = require('events');

//extend a class for the event
class myEmitter extends eventEmitter{}

//create an object of the class emitter

const emittedObject = new myEmitter();

emittedObject.on("lightOn", () => {
    console.log("Up NEPA")
});

emittedObject.emit("lightOn");