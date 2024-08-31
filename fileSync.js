const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const sec = readFileSync('./content/sec.txt', 'utf8')

console.log(first);
console.log(sec);

const newFile = writeFileSync('./content/third.txt', 'thirddddddddddddddddd file')
console.log(readFileSync('./content/third.txt', 'utf-8'));

