const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.any(), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  
  console.log('Uploaded files:', req.files.map(file => file.filename));

  res.json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});