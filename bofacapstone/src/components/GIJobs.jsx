import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./homeCard.css";
import "./GIHealth.css";
import'./UserDash.css';


const GIJobs = ({ userData }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [sidebarHidden, setSidebarHidden] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		// Clear the token from local storage or cookie
		localStorage.removeItem('token');

		// Redirect to the login page
		navigate('/login');
	};

	const [healthResources, setHealthResources] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await fetch(`https://partners.every.org/v0.2/search/employment?apiKey=pk_live_86a419192b705c472ffaeceac186383f`);
			const data = await response.json();
			setHealthResources(data);
			console.log(healthResources.nonprofits);
		  } catch (error) {
			console.log("Error fetching health resources data:", error);
		  }
		};
	  
		fetchData();
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
			`}
			</style>
      	</Helmet>

<div class="main-container-g">
<div class="navcontainer-g">
<nav class="nav-g">
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

<div class="main-g">

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

<div class="box-container-g">

<div class="head-title-gi">
				<h1>Welcome {userData.first_name}!</h1>

</div>

<div className="homeDividerContainerBlue">
								<div className='dash-top'>
									<p>Thank you for your interest in donating and making a positive impact! At Bank of America, we greatly appreciate your generosity and commitment to giving back to the community. We are proud to offer you an opportunity to organize your charitable contributions through our Charitable Gift Fund. With this program, you can streamline your donations, maximize their impact, and support causes that are close to your heart. By leveraging the expertise and resources of the Charitable Gift Fund, you can make a meaningful difference in the lives of those in need. Together, we can create a better future for all. For more information about the Charitable Gift Fund click the link below.
									</p>
									<div className='click-here-btn'>
										<Link to='https://www.bankofamerica.com/philanthropic/gift-fund-overview/' target={'_blank'} className="logout-button">Click Here!</Link>
									</div>
								</div>
				
							</div>

							<div className="homeDividerContainer">
							<div className="homeDivider-content">
								<div className="cardTitle">
								<h3>Make Quick Contributions to Employment Nonprofits</h3>
								</div>
							</div>		
							</div>


							<div className='dash-mid-health'>
								<div className='exteranal-resources'>
									<div className='health-nonprofits-gi'>
									{healthResources && healthResources.nonprofits.map(resource => (
										<div key={resource.id}>
											
											<div className="homeCardContainerGIHealth">
												<div className="cardImgContainer-top">
													<img src={resource.coverImageUrl} className='cardImgContainer-top' alt=" " />
												</div>
												<div className="cardContent-gi">
													<div className="cardTitle-gi">
													<h3 className='gi-h3'>{resource.name}</h3>
													</div>
													<div className="cardBody-gi">
													<p>{resource.description}</p>
													</div>
													<div className="card-gih">
													<Link data-every-style to={`https://www.every.org/${resource.slug}#/donate`} className="logout-button-blue" target={'_blank'}>Donate</Link>
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

export default GIJobs;
