const http =require('http');
const port =3001;
const app=require('./index')
const server=http.createServer();

server.listen(port)