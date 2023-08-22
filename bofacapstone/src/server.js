const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bofa_capstone',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

// User registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Server error' });
    } else {
      // Store the user in the database
      const user = { username, password: hashedPassword };
      db.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) {
          res.status(400).json({ error: 'Registration failed' });
        } else {
          res.status(201).json({ message: 'Registration successful' });
        }
      });
    }
  });
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Retrieve the user from the database
  db.query('SELECT * FROM users WHERE username = ?', username, (error, results) => {
    if (error || results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      // Compare the password
      bcrypt.compare(password, results[0].password, (err, passwordMatch) => {
        if (err || !passwordMatch) {
          res.status(401).json({ error: 'Invalid credentials' });
        } else {
          // Generate a JWT token for authentication
          const token = jwt.sign({ userId: results[0].id }, 'your_secret_key');
          res.status(200).json({ message: 'Login successful', token });
        }
      });
    }
  });
});

// Middleware to authenticate requests
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    jwt.verify(token, 'your_secret_key', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: 'Unauthorized' });
      } else {
        req.userId = decodedToken.userId;
        next();
      }
    });
  }
};

// Submit survey response
app.post('/survey', authenticate, (req, res) => {
  const { userPurpose, userLocation, userNavigate } = req.body;
  const userId = req.userId;

  // Store the survey response in the database
  const survey = { user_id: userId, userPurpose, userLocation, userNavigate };
  db.query('INSERT INTO surveys SET ?', survey, (error, results) => {
    if (error) {
      res.status(400).json({ error: 'Failed to submit survey response' });
    } else {
      res.status(201).json({ message: 'Survey response submitted successfully' });
    }
  });
});

// Start the server
app.listen(3003, () => {
  console.log('Server started on port 3003');
});