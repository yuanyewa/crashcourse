const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, 'test1/test2'), {recursive: true}, err => { if (err) throw err; console.log('Folder created ...') });

// write file
fs.writeFile(path.join(__dirname, 'test1/test2', 'testFile.txt'), 'this is the data', err => console.log(err));

// append file
fs.appendFile(path.join(__dirname, 'test1/test2', 'testFile.txt'), 'this is the data', err => console.log(err));

// read file
fs.readFile(path.join(__dirname, 'test1/test2', 'testFile.txt'), 'utf8', (err, data) => {if (err) throw err; console.log(data); });

// rename
fs.rename(path.join(__dirname, 'test1/test2', 'testFile.txt'), path.join(__dirname, 'testFile.txt'), err => console.log(err));
