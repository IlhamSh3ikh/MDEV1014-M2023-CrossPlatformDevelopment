const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersModel = require('./models/users')

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://gautamsai:gautam369@crosscluster.qd4aw0z.mongodb.net/cossplatform');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersModel.findOne({ email, password });
    
    if (user) {
      res.json({ success: true,message: 'Login successful', user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/signup', async (req, res) => {
     const { firstName, middleName, lastName, email, password } = req.body;
  
    try {
      const existingUser = await usersModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
      }
      usersModel.create(req.body)
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});