const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit', (req, res) => {
  console.log(typeof req);
  const { username, password } = req.body;
  console.log(typeof req.body);
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  res.json({
    message: `Welcome, ${username}! Your data has been received.`
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
