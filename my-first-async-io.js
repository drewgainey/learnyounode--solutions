const fs = require('fs');
const filePath = process.argv[2];

const file = fs.readFile(filePath, (err, data) =>{
    if(err) {
        throw new Error;
    }
    const str = data.toString();
    const strArr = str.split('\n');
    console.log(strArr.length - 1);
});