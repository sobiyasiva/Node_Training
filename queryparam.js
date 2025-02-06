const express = require('express');
const app = express();
const port = 3000;

app.get('/api/users', (req, res) => {
  const { id, name } = req.query;  

  if (id && name) {
    res.json({
      message: `User ID: ${id}, Name: ${name}`,
    });
  } else {
    res.status(400).json({
      error: 'Missing query parameters',
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});