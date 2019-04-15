const EventEmitter = require('events'); //uppercase for both as it is a class
const emitter = new EventEmitter();

// //Register a listener
// emitter.on('messageLogged', function(arg){ //e, eventArg
//     console.log('Listener called', arg);
// });

//Register a listener
emitter.on('messageLogged', (arg) => { //arrow function
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', {id:1, url:'http:// '});

//Register loggingEvent listener
emitter.on('loggingEvent', (arg)=> {
    console.log('Listener called',arg)
});

//Raise : logging (data:message)
emitter.emit('loggingEvent', {data:'message'})
