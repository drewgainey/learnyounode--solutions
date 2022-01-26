const fs = require('fs');

const dir =  process.argv[2];
const fileType = process.argv[3];

const filteredList = fs.readdir(dir, (err, list) => {
    for (let i = 0; i < list.length; i++) {
        let fileArr = list[i].split('.');
        fileArr[1] === fileType ? console.log(list[i]) : false;
    };
});