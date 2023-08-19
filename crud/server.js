const http =require('http');
const port =4001;
const app=require('./index')
const server=http.createServer(
    app
);

server.listen(port)