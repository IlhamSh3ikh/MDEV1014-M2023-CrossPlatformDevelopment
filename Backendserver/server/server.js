const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    password: String,
  });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    
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
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
      }
  
      const newUser = new User({ firstName, middleName, lastName, email, password });
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});