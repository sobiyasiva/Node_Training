const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hi, world!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
