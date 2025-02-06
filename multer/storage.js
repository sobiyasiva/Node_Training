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

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 } 
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  console.log('Uploaded file name:', req.file.filename);
  res.json({
    message: 'Image uploaded successfully!',
    file: req.file
  });
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds the 2MB limit!' });
    }
  }
  next(err);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});