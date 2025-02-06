const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();  
});
app.get('/cause-error/:userId', (req, res, next) => {
  const shouldCauseError = true;  
  if (shouldCauseError) {
    const error = new Error('Something went wrong!');
    error.status = 500;  
    return next(error);  
  }
  res.status(200).json({
    message: 'Request was successful!',
    userId: req.params.userId,  
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
