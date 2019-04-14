// there are websites services to log messages

var url = 'http://mylogger.io/log';

function log(message){
    //Send an HTTP request
    console.log(message)
}

//var and log function are private to this module

module.exports.log = log;
// module.exports.endPoint = url;

// module.exports = logFunction ;
// ^ just exports the function instead of the entire module as an object