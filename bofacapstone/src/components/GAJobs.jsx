import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./homeCard.css";
import axios from 'axios';
import './GAJobs.css';

const GAJobs = ({ userData }) => {
	const [jobs, setJobs] = useState(null);
	useEffect(() => {
		const fetchJobs = async () => {
		  const options = {
			method: 'GET',
			url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
			params: {
			  SearchQuery: 'intern',
			  PageSize: '12',
			  PageNumber: '1'
			},
			headers: {
			  'X-RapidAPI-Key': '02f9ac2000mshb46ad2986ff68b0p118e21jsn9de976b1c24d',
			  'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
			}
		  };
	
		  try {
			const response = await axios.request(options);
			setJobs(response.data);
			console.log(response.data);
		  } catch (error) {
			console.error(error);
		  }
		};
	
		fetchJobs();
	  }, []);                                                     
	
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
				<p>We are thrilled to offer users the opportunity to search for internships or co-op positions that align with their interests and career goals. Whether you are a student looking to gain practical experience or a professional seeking career advancement, our platform provides a comprehensive database of internships and co-op opportunities across various industries. We also offer resources for learning new skilsl to help you earn industry demanding certifications.</p>
				</div>
				<div className="horizontalBreak"></div>
			</div>
		</div>

		<div className='dash-mid'>
			<h3 className='earlyJob-h3'>Explore Early Career Opportunities</h3>
			<div className='exteranal-resources'>
				<div className='health-nonprofits'>
				{jobs && jobs.data.map(job => (
					<div key={job.id}>
						<div className="apiCardContainer">
							<div className="cardImgContainer">
								<h2>{job.title}</h2>
							</div>
							<div className="cardContent">
								<div className="cardTitle">
								<h3>{job.company}</h3>
								</div>
								<div className="cardBody">
								<p>{job.postDate}</p>
								</div>
								<div className="apiCardBtn">
								<Link to={job.url} target="_blank">View More</Link>
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

export default GAJobs;
