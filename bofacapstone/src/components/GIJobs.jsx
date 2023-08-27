import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import "./homeCard.css";
import "./GIHealth.css";

const GIJobs = ({ userData }) => {
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
			const response = await fetch('http://localhost:3003/api/job-resources');
			const data = await response.json();
			setHealthResources(data);
			console.log(healthResources.nonprofits);
		  } catch (error) {
			console.log("Error fetching health resources data:", error);
		  }
		};
	  
		fetchData();
	  }, []);
		

  return (
	<div>
		<Helmet>
            <script async defer src="https://embeds.every.org/0.4/button.js"></script>
        </Helmet>

		<div className='logout-div'>
			<button className="logout-button" onClick={handleLogout}>Logout</button>
		</div>
			
		<div className="homeDividerContainerBlue">
			
			<div className='dash-top'>
				<h2>Welcome {userData.first_name}!</h2>
				<p>Thank you for your interest in donating and making a positive impact! At Bank of America, we greatly appreciate your generosity and commitment to giving back to the community. We are proud to offer you an opportunity to organize your charitable contributions through our Charitable Gift Fund. With this program, you can streamline your donations, maximize their impact, and support causes that are close to your heart. By leveraging the expertise and resources of the Charitable Gift Fund, you can make a meaningful difference in the lives of those in need. Together, we can create a better future for all. For more information about the Charitable Gift Fund click the link below.
				</p>
				<div className="horizontalBreak"></div>
				<div>
					<Link to='https://www.bankofamerica.com/philanthropic/gift-fund-overview/' target={'_blank'} className="dasboard-blue-button">Click Here!</Link>
				</div>
			</div>
		</div>

		<div className="homeDividerContainer">
			<div className="homeDivider-content">
				<div className="cardTitle">
				<h3>Make Quick Contributions to Health Nonprofits</h3>
				</div>
			</div>		
    	</div>


		<div className='dash-mid'>
			<div className='exteranal-resources'>
				<div className='health-nonprofits'>
				{healthResources && healthResources.nonprofits.map(resource => (
					<div key={resource.id}>
						
						<div className="homeCardContainerGIHealth">
							<div className="cardImgContainer">
								<img src={resource.coverImageUrl} alt=" " />
							</div>
							<div className="cardContent">
								<div className="cardTitle">
								<h3>{resource.name}</h3>
								</div>
								<div className="cardBody">
								<p>{resource.description}</p>
								</div>
								<div className="cardBtn">
								<Link data-every-style to={`https://www.every.org/${resource.slug}#/donate`} target='_blank'>Donate</Link>
								
								</div>
							</div>
						</div>
					</div>
				))}
				</div>
			</div>
		</div>
	</div>
  )
}

export default GIJobs;
