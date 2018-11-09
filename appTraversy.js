const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  // next line will be output to the browser.
  res.end('Yo dude');
});


server.listen(port, hostname, () => {
  console.log(`Server started on port ${port}`)
});
