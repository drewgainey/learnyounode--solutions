const net = require('net');

const port = process.argv[2];

const server = net.createServer(socket => {
    //"2013-07-06 17:42"
    let date = new Date();
    let year = date.getFullYear();
    let month = 0;
    date.getMonth() > 8 ? month = date.getMonth() + 1 : month = '0' + (date.getMonth() + 1);
    let day = date.getDate();
    let hour = date.getHours();
    let mins = date.getMinutes();

    socket.end(`${year}-${month}-${day} ${hour}:${mins}` + '\n');
});

server.listen(port);