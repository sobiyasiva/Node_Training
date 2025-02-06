const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); 
});

app.use((req, res, next) => {
  const isAuthenticated = false; 
  
  if (!isAuthenticated) {
    res.status(401).send('Unauthorized');
  } else {
    next(); 
  }
});

app.use((req, res, next) => {
  const isAdmin = false; 
  
  if (!isAdmin) {
    res.status(403).send('Forbidden: Admins only');
  } else {
    next(); 
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
