const path = require('path');
console.log(path.sep);

let joinPath  = path.join('content','sub','test.txt')

console.log(joinPath);


let abs  = path.resolve('content','sub','test.txt')

console.log(abs);


