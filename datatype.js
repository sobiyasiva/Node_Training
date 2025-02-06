const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
const xmlParser = require('express-xml-bodyparser');
app.use(xmlParser());
app.use((req, res, next) => {
  console.log('req-type:',typeof req);
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Type of header:', typeof req.headers['content-type']);
  console.log('Type of req.body:', typeof req.body);
  next();
});

app.post('/json', (req, res) => {
  res.json({
    receivedData: req.body,
    receivedType: typeof req.body,  
  });
});

app.post('/text', (req, res) => {
  res.json({
    receivedData: req.body,
    receivedType: typeof req.body,  
  });
});

app.post('/xml', (req, res) => {
  res.json({
    receivedData: req.body,
    receivedType: typeof req.body,  
  });
});

app.post('/javascript', (req, res) => {
//  we cannot parse javascript using express
});

app.post('/html', (req, res) => {
//  we cannot parse html using express
});

app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});














// const express = require('express');
// const app = express();

// app.use(express.json()); 
// app.use(express.urlencoded({ extended: true })); 

// app.post('/check-body', (req, res) => {
//   const receivedData = req.body.input;
//   res.json({
//     receivedValue: receivedData,
//     receivedType: typeof receivedData,
//   });
// });

// app.get('/check-query', (req, res) => {
//   const receivedData = req.query.input;
//   res.json({
//     receivedValue: receivedData,
//     receivedType: typeof receivedData,
//   });
// });


// app.get('/check-param/:input', (req, res) => {
//   const receivedData = req.params.input;
//   res.json({
//     receivedValue: receivedData,
//     receivedType: typeof receivedData,
//   });
// });

// app.listen(3003, () => {
//   console.log('Server is running on http://localhost:3003');
// });
