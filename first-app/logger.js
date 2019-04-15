// there are websites services to log messages
// (function(exports,require,module,__filename,__dirname){

// })
const EventEmitter = require('events'); //uppercase for both as it is a class
const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname)

// var url = 'http://mylogger.io/log';

function log(message){
    //Send an HTTP request
    console.log(message);

    //Raise an event
    emitter.emit('messageLogged', {id:1, url:'http:// '});
}

module.exports = log;

//var and log function are private to this module

// module.exports.log = log;
// module.exports.endPoint = url;

// module.exports = logFunction ;
// ^ just exports the function instead of the entire module as an object