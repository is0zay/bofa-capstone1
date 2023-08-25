import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./homeCard.css";
import "./GAHealth.css";

const GAHealth = ({ userData }) => {
	const [healthResources, setHealthResources] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://partners.every.org/v0.2/browse/health?apiKey=pk_live_86a419192b705c472ffaeceac186383f");
				const data = await response.json();
				setHealthResources(data);
				console.log(healthResources.nonprofits);
			} catch (error) {
				console.log("Error fetching health resources data:", error)
			}
		};

		fetchData();
	}, []);

	console.log(userData);
  return (
	<div>
		<div className="homeDividerContainerBlue">
			<div className="homeDivder-img-container">
			</div>
			<div className="homeDivider-content">
				<div className="cardTitle">
				<h3>Welcome {userData.first_name}!</h3>
				</div>
				<div className="homeDivider-body">
				<p>Here, you have the incredible opportunity to apply for grants specifically designed to address their health concerns. We understand the importance of well-being and are committed to providing support to individuals in need. By clicking on the provided link, you can access a simple and efficient application process, enabling you to apply for grants tailored to your health requirements. Take the first step towards improving your health today and explore the possibilities that our grants can offer.</p>
				</div>
				<div className="horizontalBreak"></div>
				<div className="homeDivider-info">
					<Link to='https://www.bankofamerica.com/philanthropic/search/?program=4001&area=All' target={'_blank'} className="dasboard-blue-button">Click Here!</Link>
				</div>
			</div>
		</div>
	  	

		<div className="homeDividerContainer">
			<div className="homeDivider-content">
				<div className="cardTitle">
				<h3><h3>Explore Other Nonprofits Offering Assistance</h3></h3>
				</div>
			</div>		
    	</div>


		<div className='dash-mid'>
			<h3>Explore Other Nonprofits Offering Assistance</h3>
			<div className='exteranal-resources'>
				<div className='health-nonprofits'>
				{healthResources && healthResources.nonprofits.map(resource => (
					<div key={resource.id}>
						
						<div className="homeCardContainer">
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
								<Link to={resource.profileUrl} target="_blank">View More</Link>
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

export default GAHealth
