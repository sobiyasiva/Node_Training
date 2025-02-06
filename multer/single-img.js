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

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({
    message: 'Image uploaded successfully!',
    file: req.file
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


// let a=req.body;
// let {a,b}=req.body
// let response={
//   name:"sobi",age:3
// }

// let {name,age,status="success"}=response;
// console.log("result 1:",name)
// console.log("result 2:",age)
// console.log("result 3:",status)