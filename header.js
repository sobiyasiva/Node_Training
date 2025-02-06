const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  const authorizationHeader = req.headers['authorization'];  

  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
    const token = authorizationHeader.split(' ')[1];  
    res.json({
      message: `Token received: ${token}`,
    });
  } else {
    res.status(400).json({
      error: 'Authorization header missing or invalid',
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});