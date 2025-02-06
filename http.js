const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the HTTP module!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('HTTP server is running on http://localhost:3000');
});


// const express = require('express');
// const app = express();

// // Define a GET route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// // Handle undefined routes
// app.use((req, res) => {
//   res.status(404).send('Not Found');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Express server is running on http://localhost:3000');
// });
