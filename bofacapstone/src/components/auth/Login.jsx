import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import firebaseExports from '../../firebase';


const auth = firebaseExports.auth;


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const logIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential)
		}).catch((error) => {
			console.log(error);
		})
	}

  return (
	<div className='log-in-container'>
		<form onSubmit={logIn}>
			<h2>Log In</h2>
			<input type="email"
				placeholder='Enter your email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></input>
			<input type="password" 
				placeholder='Enter your password' 
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			></input>
			<button type='submit'>Log In</button>
		</form>
	  
	</div>
  )
}

export default Login;
