// const Person = require('./person');
// const person1 = new Person('Bla', 31);
// const Logger = require('./logger');
// // console.log("Hello from nodejs", person1);
// person1.greeting();
// const logger = new Logger();
// logger.on('message', (data) => console.log('Called Listner', data));
// logger.log('Hello world');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // } else if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // } else if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'bob smith', age: 40 },
  //     { name: 'xx yy', age: 50 },
  //     { name: 'zz tt', age: 60 }
  //   ];
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   res.end(JSON.stringify(users));
  // } else {
  //   res.writeHead(404, {});
  //   res.end('<h1>sfdsfsf</h1>');
  //   console.log(req.url); 
  // }
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  let extname = path.extname(filePath);
  let contentType = 'text/html';
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }
  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { contentType } );
    res.end(content);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('server running on port ', PORT));