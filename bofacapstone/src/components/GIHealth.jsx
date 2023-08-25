import React from 'react'
import { Link } from 'react-router-dom';

const GIHealth = ({ userData }) => {
	console.log(userData);
  return (
	<div>
		<h2>Welcome {userData.first_name}!</h2>
		<div className='dash-top'>
	  	<p>Here, you have the incredible opportunity to apply for grants specifically designed to address their health concerns. We understand the importance of well-being and are committed to providing support to individuals in need. By clicking on the provided link, you can access a simple and efficient application process, enabling you to apply for grants tailored to your health requirements. Take the first step towards improving your health today and explore the possibilities that our grants can offer.</p>
		<Link to='https://www.bankofamerica.com/philanthropic/search/?program=4001&area=All' target={'_blank'}>Click Here!</Link>
		</div>
	</div>
  )
}

export default GIHealth
