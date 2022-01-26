const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().split('').length);
        console.log(data.toString());  
    }))
});