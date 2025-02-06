const express = require('express');
const app = express();
const userRouter = express.Router();
const taskRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log(`Router-level middleware executed for ${req.method} ${req.url}`);
  next();
});

userRouter.get('/users', (req, res) => {
  res.send('List of users');
});

taskRouter.get('/tasks', (req, res) => {
  res.send('List of tasks');
});

taskRouter.get('/tasks/:id', (req, res) => {
  res.send(`Task details for ID: ${req.params.id}`);
});

app.use('/user', userRouter); 
app.use('/task', taskRouter);  

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
