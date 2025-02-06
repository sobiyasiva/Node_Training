const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://example.com',  
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  try {
    res.json({ message: 'CORS is enabled for http://example.com only!' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
