const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((request, response) => {
    let fileStream = fs.createReadStream(file);
    fileStream.pipe(response);
});

server.listen(port);