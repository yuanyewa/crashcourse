// const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized url
console.log(myUrl.toString());

// host: myUrl.host, with port
// hostname: myUrl.hostname: noport
// pathname: pathname
// query: search
// params: searchParams
myUrl.searchParams.append('abc', 123);
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

// console.log(myUrl.searchParams);
