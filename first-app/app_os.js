const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory:' + totalMemory);

//Template string
//ES6 / ES2015 :ECMA Script 6

console.log(`Total Memory: ${totalMemory}`);

console.log(`Free Memory: ${freeMemory}`);