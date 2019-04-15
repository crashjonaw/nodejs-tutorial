const EventEmitter = require('events');

const Logger = require('./logger_class');
const logger = new Logger();


//Register a listener
logger.on('messageLogged', (arg) => { //arrow function
    console.log('Listener called', arg);
});


logger.log('message');