const fs = require("fs");

function filteredList(dir, fileType) {
  fs.readdir(dir, (err, list) => {
    for (let i = 0; i < list.length; i++) {
      let fileArr = list[i].split(".");
      fileArr[1] === fileType ? console.log(list[i]) : false;
    }
  });
}

module.exports = filteredList;
