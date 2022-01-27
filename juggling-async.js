const http = require("http");
const bl = require("bl");

let results = [];
let count = 0;

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function data(index) {
  http.get(process.argv[index + 2], function (res) {
    res.setEncoding("utf8");
    res.pipe(
      bl((err, data) => {
        if (err) {
          return console.error(err);
        }
        results[index] = data.toString();
        count ++;
      })
    );
    if (count === 3) {
        printResults();
    }
  });
}

for (let i = 0; i < 3; i ++) {
    data(i);   
}




