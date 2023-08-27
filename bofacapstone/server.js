require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const axios = require('axios');

const dbName = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const app = express();
app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: host,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.get("/newsarticles", (req, res) => {
  const query = "SELECT * FROM newsarticles";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching articles:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.json(results);
        }
  });
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
>
  
const secretKey = process.env.SECRET_KEY;

app.post('/login', (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);
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
			const token = jwt.sign({ userId: results[0].id }, secretKey);
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
    jwt.verify(token.split(' ')[1], secretKey, (err, decodedToken) => {
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
  const { userPurpose, userLocation, userInterest } = req.body;
  const userId = req.userId;

  // Store the survey response in the database
  const survey = { user_id: userId, user_purpose: userPurpose, user_location: userLocation, user_interest: userInterest };
  console.log(survey);
  db.query('INSERT INTO surveys SET ?', survey, (error, results) => {
    if (error) {
      res.status(400).json({ error: 'Failed to submit survey response' });
    } else {
      res.status(201).json({ message: 'Survey response submitted successfully' });
    }
  });
});

// Check if the logged-in user has completed the survey
app.get('/api/survey/completed', authenticate, (req, res) => {
	const userId = req.userId;
  
	// Query the surveys table to check if the logged-in user has completed the survey
	const query = 'SELECT COUNT(*) AS completed FROM surveys WHERE user_id = ?';
  
	db.query(query, [userId], (err, results) => {
	  if (err) {
		console.error('Failed to query the database', err);
		res.status(500).json({ error: 'Failed to query the database' });
		return;
	  }
  
	  const completed = results[0].completed > 0;
  
	  res.json({ completed });
	});
  });

app.get('/users/:userId', authenticate, (req, res) => {
	const userId = req.params.userId;
	console.log(userId);
  
	// Fetch user-specific data from the Users table
	db.query('SELECT * FROM Users WHERE id = ?', [userId], (error, results) => {
	  if (error) {
		res.status(500).json({ error: 'Failed to fetch user data' });
	  } else {
		const userData = results[0]; // Assuming there's only one user with the given ID
		res.status(200).json(userData);
	  }
	});
  });

  app.get('/getuserinfo', authenticate, (req, res) => {
	const userId = req.userId;
	console.log(userId);
  
	// Query the Users and surveys tables to get user information
	const query = `SELECT Users.id, Users.first_name, Users.last_name, Users.email, Users.password, surveys.user_purpose, surveys.user_location, surveys.user_interest, surveys.submission_date FROM Users JOIN surveys ON Users.id = surveys.user_id WHERE user_id = ?`;
  
	db.query(query, [userId], (err, results) => {
	  if (err) {
		console.error('Failed to query the database', err);
		res.status(500).json({ error: 'Failed to query the database' });
		return;
	  }
  
	  const user = results[0]; // Assuming there's only one user with the given ID
  
	  res.json(user);
	});
  });

  app.get('/users-surveys', (req, res) => {
	const query = `SELECT Users.id, Users.first_name, Users.last_name, Users.email, Users.password, surveys.user_purpose, surveys.user_location, surveys.user_interest, surveys.submission_date FROM Users JOIN surveys ON Users.id = surveys.user_id WHERE user_id = ?`;
  
	// Execute the SQL query
	db.query(query, (error, results) => {
	  if (error) {
		console.error('Error executing the query:', error);
		res.status(500).json({ error: 'An error occurred' });
		return;
	  }
	  res.json(results);
	});
  });

  const publicKeyEvery = process.env.PUBLIC_KEY_EVERY

  app.get('/api/health-resources', async (req, res) => {
	try {
	  const response = await fetch(`https://partners.every.org/v0.2/browse/health?apiKey=${publicKeyEvery}`);
	  const data = await response.json();
	  res.json(data);
	} catch (error) {
	  console.log("Error fetching health resources data:", error);
	  res.status(500).json({ error: "Error fetching health resources data" });
	}
  });

  app.get('/api/job-resources', async (req, res) => {
	try {
	  const response = await fetch(`https://partners.every.org/v0.2/search/jobs?apiKey=${publicKeyEvery}`);
	  const data = await response.json();
	  res.json(data);
	} catch (error) {
	  console.log("Error fetching health resources data:", error);
	  res.status(500).json({ error: "Error fetching health resources data" });
	}
  });

  const jobKey = process.env.JOB_API_KEY;
  const jobHost = process.env.JOB_API_HOST;

  app.get('/api/jobs', async (req, res) => {
	try {
	  const options = {
		method: 'GET',
		url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
		params: {
		  SearchQuery: 'intern',
		  PageSize: '12',
		  PageNumber: '1'
		},
		headers: {
		  'X-RapidAPI-Key': jobKey,
		  'X-RapidAPI-Host': jobHost
		}
	  };
  
	  const response = await axios.request(options);
	  res.json(response.data);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Error fetching job data' });
	}
  });
  

// Start the server
app.listen(3003, () => {
  console.log('Server started on port 3003');
});
