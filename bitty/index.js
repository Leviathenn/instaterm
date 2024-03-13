const gritty = require('gritty');
const http = require('http');
const squad = require('squad');
const express = require('express');
const io = require('socket.io');

const app = express();
const server = http.createServer(app);

const ip = process.env.IP /* c9 */
          || '0.0.0.0';

app.use(gritty())
    .use(express.static(__dirname));
function exit(msg) {       
     console.error(msg);
     process.exit(-1);   
 }
 const port = 1138;


    const getMessage = (a) => a.message;
const socket = io(server);

gritty.listen(socket, {
    command:'/bin/bash',
    autoRestart:true,
});

server.listen(1138, ip)
    .on('error', squad(exit, getMessage));

console.log(`url: http://localhost:${port}`);