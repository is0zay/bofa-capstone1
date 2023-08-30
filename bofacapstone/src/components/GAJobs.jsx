import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './GAJobs.css';
import'./UserDash.css';
import "./homeCard.css";


const GAJobs = ({ userData }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [sidebarHidden, setSidebarHidden] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		// Clear the token from local storage or cookie
		localStorage.removeItem('token');

		// Redirect to the login page
		navigate('/login');
	};

	const [jobs, setJobs] = useState(null);
	useEffect(() => {
		const fetchJobs = async () => {
			try {
			  const response = await axios.get('https://bofa-cap2.onrender.com/api/jobs');
			  setJobs(response.data);
			  console.log(response.data);
			} catch (error) {
			  console.error(error);
			}
		  };
	
		fetchJobs();
	  }, []);
	  
	  const toggleDarkMode = () => {
		// Toggle the state
		setDarkMode(!darkMode);
		// Add or remove the .dark class from the body
		if (!darkMode) {
		  document.body.classList.add('dark');
		} else {
		  document.body.classList.remove('dark');
		}
	  };

	  const toggleSidebar = () => {
		setSidebarHidden(!sidebarHidden);
	  };
	
  return (
	<div>
		<Helmet>
			 <script async defer src="https://embeds.every.org/0.4/button.js"></script>
		
			<style>
			{`
				.utilityNav {
				display: none;
				}
				.navbar {
				display: none;
				}
				.footer-content, .utilityFooter {
				display: none;
				}
			`}
			</style>
      	</Helmet>
       
	   <section id="sidebar" className={sidebarHidden ? 'hide' : ''}>
	   <Link to="/" className="brand">
  <img src="./nav/boalogo.png" alt="website logo" />
</Link>
		<ul class="side-menu top">
			
			<li class="">
				<Link to="/dashboard">
					<span class="text">{userData.first_name} {userData.last_name}</span>
				</Link>
			</li>
			<li class="">
				<Link to="/dashboard">
					<span class="text">{userData.email}</span>
				</Link>
			</li>
			<li class="">
				<Link to="/dashboard">
					<span class="text">{userData.user_purpose}</span>
				</Link>
			</li>
			<li class="active">
				<Link to="/dashboard">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</Link>
			</li>
			
		</ul>
		<ul class="side-menu">
			
			 <li>
				<Link to="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</Link>
			</li> 
		</ul>
	</section>
	

	
	<section id="content">
		
		<nav>
			<i class='bx bx-menu' onClick={toggleSidebar}></i>
			<form action="#">
				<div class="form-input">
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden  checked={darkMode} onChange={toggleDarkMode}/>
			<label for="switch-mode" class="switch-mode"></label>
		
		</nav>
		
		<main className='gi-main'>
			<div class="head-title-gi">
				<h1>Welcome {userData.first_name}!</h1>
				<div className='logout-div'>
			<a className="logout-button" onClick={handleLogout}>Logout</a>
		</div>
			</div>

			<div class="box-info-gi">
					<div class="box">
					
						<div class="text">
						<div className="homeDividerContainerBlue">
			<div className="homeDivder-img-container">
			</div>
			<div className="homeDivider-content">
				<div className="cardTitle">
					<h3>Welcome {userData.first_name}!</h3>
				</div>
				<div className="homeDivider-body">
				<p>We are thrilled to offer users the opportunity to search for internships or co-op positions that align with their interests and career goals. Whether you are a student looking to gain practical experience or a professional seeking career advancement, our platform provides a comprehensive database of internships and co-op opportunities across various industries. We also offer resources for learning new skilsl to help you earn industry demanding certifications.</p>
				</div>
				<div className="horizontalBreak"></div>
			</div>
		</div>

		<div className='dash-mid'>
			<h3 className='earlyJob-h3'>Explore Early Career Opportunities</h3>
			<div className='exteranal-resources'>
				<div className='job-list'>
				{jobs && jobs.data.map(job => (
					<div key={job.id}>
						<div className="apiCardContainer">
							<div className="cardImgContainer">
								<h2 className='job-h2'>{job.title}</h2>
							</div>
							<div className="job-cardContent">
								<div className="cardTitle-gi">
								<h3 className='job-h3'>{job.company}</h3>
								</div>
								<div className="job-cardBody">
								<p>{job.postDate}</p>
								</div>
								<div className="click-here-btn2">
								<Link to={job.url} target="_blank" className='logout-button'>View More</Link>
								</div>
							</div>
						</div>	
					</div>
				))}
				</div>
			</div>
		</div>
						</div>
					</div>
			
		</div>
		


	
		</main>
		
	</section>
		

	  	
			
	</div>
  )
}

export default GAJobs;
