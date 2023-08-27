import React, { useState } from 'react';
import axios from 'axios';
import './LogIn.css';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = ({ onLoginSuccess }) => {
	const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
	

    try {
      const response = await axios.post('http://localhost:3003/login', { email, password });
      const { token, userId } = response.data;

      // Save the token to local storage or cookie
      localStorage.setItem('token', token);
	  console.log("good");

	  // Set the default Authorization header for future requests
	 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	 // Fetch user-specific data from the server
	 const userDataResponse = await axios.get(`http://localhost:3003/users/${userId}`);
	 const userData = userDataResponse.data; // User-specific data returned from the server

	
      
      // Redirect or perform any necessary action
      // e.g., navigate to a dashboard page
	  navigate('/survey');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
		<Link to='/signup'>Don't have an account?</Link>
      </div>
    </div>
  );
};

export default LogIn;