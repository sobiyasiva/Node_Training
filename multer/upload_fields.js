const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// Ensure the uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Allowed field names and their max file limits
const fieldLimits = {
  task1Image: 1,
  task2Image: 3,
  task3Image: 1
};

// Multer configuration with file validation
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per file
  fileFilter: function (req, file, cb) {
    // Ensure the field name is valid
    if (!fieldLimits[file.fieldname]) {
      return cb(new Error(`Invalid field name: ${file.fieldname}`));
    }
    cb(null, true);
  }
}).fields([
  { name: 'task1Image', maxCount: 1 },
  { name: 'task2Image', maxCount: 3 },
  { name: 'task3Image', maxCount: 1 }
]);

app.post('/upload-tasks', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ error: `Too many images uploaded for a field.` });
      }
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No files uploaded. Please upload at least one image.' });
    }

    // Check for missing required fields
    const missingFields = Object.keys(fieldLimits).filter(
      field => !req.files[field] || req.files[field].length === 0
    );

    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required images for: ${missingFields.join(', ')}` });
    }

    // Validate file count for each field
    for (let field in req.files) {
      if (req.files[field].length > fieldLimits[field]) {
        return res.status(400).json({
          error: `Too many images uploaded for ${field}. Maximum allowed is ${fieldLimits[field]}.`
        });
      }
    }

    res.json({
      message: 'Images uploaded successfully!',
      uploadedFiles: req.files
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});