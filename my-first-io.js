const fs = require('fs');

const file = fs.readFileSync(process.argv[2]);
const str = file.toString();
const strArr = str.split('\n');

console.log(strArr.length - 1);

