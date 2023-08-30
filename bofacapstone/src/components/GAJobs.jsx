import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './GAJobs.css';
import'./UserDash.css';
import "./homeCard.css";
import'./UserDash.css';



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
			 <script>
				{
					`let menuicn = document.querySelector(".menuicn");
					let nav = document.querySelector(".navcontainer");
					
					menuicn.addEventListener("click", () => {
						nav.classList.toggle("navclose");
					})`
				}
			 </script>
		
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

		  <div className='header'>

<div class="logosec">
	<Link to='/'><img src="./nav/boalogo.png" alt="website logo" className='n-logo' /></Link>
	<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
		class="icn menuicn"
		id="menuicn"
		alt="menu-icon"/>
</div>



<div class="message">
	<div class="circle"></div>
	<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
		class="icn"
		alt=""/>
	<div class="dp">
	<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
			class="dpicn"
			alt="dp"/>
	</div>
</div>

</div>

<div class="main-container">
<div class="navcontainer">
<nav class="nav">
<div class="nav-upper-options">
	

	<div class="option2 nav-option">
		<h3>{userData.first_name}</h3>
	</div>
	
	<div class="nav-option option1">
		<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
			class="nav-img"
			alt="dashboard" />
		<h3> Dashboard</h3>
	</div>

	<div class="nav-option logout">
	<a className="logout-button" onClick={handleLogout}>Logout</a>
	</div>

</div>
</nav>
</div>

<div class="main">

<div class="searchbar2">
<input type="text"
	name=""
	id=""
	placeholder="Search" />
<div class="searchbtn">
<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
		class="icn srchicn"
		alt="search-button" />
</div>
</div>

<div class="box-container">

<div class="head-title-gi">
				<h1>Welcome {userData.first_name}!</h1>

</div>

<div className="homeDividerContainerBlue">
								<div className='dash-top'>
									<p>We are thrilled to offer users the opportunity to search for internships or co-op positions that align with their interests and career goals. Whether you are a student looking to gain practical experience or a professional seeking career advancement, our platform provides a comprehensive database of internships and co-op opportunities across various industries. We also offer resources for learning new skilsl to help you earn industry demanding certifications.
									</p>
									<div className='click-here-btn'>
										<Link to='https://www.bankofamerica.com/philanthropic/gift-fund-overview/' target={'_blank'} className="logout-button">Click Here!</Link>
									</div>
								</div>
				
							</div>

							<div className="homeDividerContainer">
							<div className="homeDivider-content">
								<div className="cardTitle">
								<h3>Explore Employment Nonprofits</h3>
								</div>
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
	

	
	
				
	</div>
  )
}

export default GAJobs;
