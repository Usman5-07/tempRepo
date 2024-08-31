const os = require('os');

let user = os.userInfo()

console.log(user);

let min = os.uptime /60;
let hours = min /60;
let days = hours /24;

console.log(`Uptime of OS is: ${days} days`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem() ,
    freemem: os.freemem()/ 1024
}

console.log(currentOS);





