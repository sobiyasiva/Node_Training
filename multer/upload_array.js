const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

app.post('/upload-multiple', upload.array('photos', 5), (req, res) => {
  console.log(req.files); 
  res.send('Multiple files uploaded successfully');
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
