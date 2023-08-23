const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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
app.post('/signup', (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Server error' });
    } else {
      // Store the user in the database
      const user = { first_name, last_name, email, password: hashedPassword };
      db.query(
        'INSERT INTO Users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
        [first_name, last_name, email, hashedPassword],
        (error, results) => {
          if (error) {
            res.status(400).json({ error: 'Registration failed' });
          } else {
            res.status(201).json({ message: 'Registration successful' });
          }
        }
      );
    }
  });
});

// User login
app.post('/login', (req, res) => {
	const { email, password } = req.body;
  
	// Retrieve the user from the database
	db.query('SELECT * FROM Users WHERE email = ?', email, (error, results) => {
	  if (error || results.length === 0) {
		res.status(401).json({ error: 'Invalid credentials' });
	  } else {
		// Compare the password
		bcrypt.compare(password, results[0].password, (err, passwordMatch) => {
		  if (err || !passwordMatch) {
			res.status(401).json({ error: 'Invalid credentials' });
		  } else {
			// Generate a JWT token for authentication
			const token = jwt.sign({ userId: results[0].id }, process.env.SECRET_KEY);
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
	  jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
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
app.post('/api/survey', authenticate, (req, res) => {
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