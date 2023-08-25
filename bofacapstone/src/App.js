
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom"; //importing to handle routing for the entire application
import "./App.css";
import'./components/Survey.css';
import Nav from "./components/utilityNav";
import MainNav from "./components/mainNav";
import MainFooter from "./components/mainFooter";
import Home from "./pages/home";
import UtilityFooter from "./components/utilityFooter";
import AboutHistory from "./pages/aboutHistory";
import Newsletter from "./pages/newsletter";
import Contact from "./pages/contact";
import Signedup from "./pages/Signedup";
import LogInPage from "./pages/LogInPage";
import axios from "axios";
import GIJobs from "./components/GIJobs";
import GAJobs from "./components/GAJobs";
import GIHealth from "./components/GIHealth";
import GAHealth from "./components/GAHealth";



// Create the Dashboard component
const DashboardPage = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  const fetchUserData = async () => {
		try {
		  const token = localStorage.getItem('token');
		  const response = await axios.get('http://localhost:3003/getuserinfo', {
			headers: { Authorization: `Bearer ${token}` },
		  });
		  const userData = response.data;
		  setUser(userData);
		  console.log(userData);
		  console.log(userData.user_interest)
		  setLoading(false);
		} catch (error) {
		  console.error('Failed to fetch user data', error);
		}
	  };
  
	  fetchUserData();
	}, []);
  
  return (
    <div>
		{loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          {user.user_interest === 'jobs' && user.user_purpose === 'Get Involved' && <GIJobs userData={user} />}
          {user.user_interest === 'jobs' && user.user_purpose === 'Get Assistance' && <GAJobs userData={user} />}
          {user.user_interest === 'health' && user.user_purpose === 'Get Involved' && <GIHealth userData={user} />}
          {user.user_interest === 'health' && user.user_purpose === 'Get Assistance' && <GAHealth userData={user} />}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

const Survey = () => {

	// State to store the user's responses
	const [responses, setResponses] = useState({
	  userPurpose: '',
	  userLocation: '',
	  userInterest: '',
	});
  
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false);
  
	const navigate = useNavigate();
  
	// Function to handle changes in the responses
	const handleResponseChange = (question, value) => {
	  setResponses((prevResponses) => ({
		...prevResponses,
		[question]: value,
	  }));
	}; 
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
  
	  try {
		// Send the responses to the server using Axios POST request
		await axios.post('http://localhost:3003/api/survey', responses);
  
		setIsSubmitted(true);
  
		// TODO: You can add additional logic here upon successful submission
  
		console.log('Survey response submitted successfully');
  
		setTimeout(() => {
		  navigate('/dashboard'); // Navigate to another page after 2 seconds
		}, 2000); // 2 seconds delay
	  } catch (error) {
		// Handle error if the request fails
		console.error('Failed to submit survey response', error);
	  }
	};
  
	useEffect(() => {
		const checkSurveyCompletion = async () => {
		  try {
			const response = await axios.get('http://localhost:3003/api/survey/completed');
			setHasCompletedSurvey(response.data.completed);
		  } catch (error) {
			console.error('Failed to check survey completion', error);
		  }
		};
	
		checkSurveyCompletion();
	  }, []);
	
	return (
	  <div className="survey-container">
		{!hasCompletedSurvey ? (

		<div className="survey-form">
		  <h1>Complete this short survey</h1>
		  <form onSubmit={handleSubmit}>
			<div>
			  <h3>Are you looking for ways to get involved, ways to get assistance, or general info?</h3>
			  <label>
				<input
				  type="radio"
				  name="userPurpose"
				  value="Get Involved"
				  checked={responses.userPurpose === 'Get Involved'}
				  onChange={(e) => handleResponseChange('userPurpose', e.target.value)}
				/>
				Get Involved
			  </label>
			  <label>
				  <input
				  type="radio"
				  name="userPurpose"
				  value="Get Assistance"
				  checked={responses.userPurpose === 'Get Assistance'}
				  onChange={(e) => handleResponseChange('userPurpose', e.target.value)}
				  />
			   Get Assistance
			  </label>
			  <label>
			  <input
				type="radio"
				name="userPurpose"
				value="Other"
				checked={responses.userPurpose === 'Other'}
				onChange={(e) => handleResponseChange('userPurpose', e.target.value)}
			  />
			  Get General Information
				</label>
			</div>
  
			<div>
			  <h3>What state are you located in?</h3>
			  {/* Repeat the label and input elements similar to the question above */}
			  <label>
				<select
				  name="userLocation"
				  id="userLocation"
				  onChange={(e) => handleResponseChange('userLocation', e.target.value)}
				>
				  <option value="AL">Alabama</option>
				  <option value="AK">Alaska</option>
				  <option value="AZ">Arizona</option>
				  <option value="AR">Arkansas</option>
				  <option value="CA">California</option>
				  <option value="CO">Colorado</option>
				  <option value="CT">Connecticut</option>
				  <option value="DE">Delaware</option>
				  <option value="DC">District Of Columbia</option>
				  <option value="FL">Florida</option>
				  <option value="GA">Georgia</option>
				  <option value="HI">Hawaii</option>
				  <option value="ID">Idaho</option>
				  <option value="IL">Illinois</option>
				  <option value="IN">Indiana</option>
				  <option value="IA">Iowa</option>
				  <option value="KS">Kansas</option>
				  <option value="KY">Kentucky</option>
				  <option value="LA">Louisiana</option>
				  <option value="ME">Maine</option>
				  <option value="MD">Maryland</option>
				  <option value="MA">Massachusetts</option>
				  <option value="MI">Michigan</option>
				  <option value="MN">Minnesota</option>
				  <option value="MS">Mississippi</option>
				  <option value="MO">Missouri</option>
				  <option value="MT">Montana</option>
				  <option value="NE">Nebraska</option>
				  <option value="NV">Nevada</option>
				  <option value="NH">New Hampshire</option>
				  <option value="NJ">New Jersey</option>
				  <option value="NM">New Mexico</option>
				  <option value="NY">New York</option>
				  <option value="NC">North Carolina</option>
				  <option value="ND">North Dakota</option>
				  <option value="OH">Ohio</option>
				  <option value="OK">Oklahoma</option>
				  <option value="OR">Oregon</option>
				  <option value="PA">Pennsylvania</option>
				  <option value="RI">Rhode Island</option>
				  <option value="SC">South Carolina</option>
				  <option value="SD">South Dakota</option>
				  <option value="TN">Tennessee</option>
				  <option value="TX">Texas</option>
				  <option value="UT">Utah</option>
				  <option value="VT">Vermont</option>
				  <option value="VA">Virginia</option>
				  <option value="WA">Washington</option>
				  <option value="WV">West Virginia</option>
				  <option value="WI">Wisconsin</option>
				  <option value="WY">Wyoming</option>
				</select>
			  </label>
			</div>
  
			<div>
			  <h3>What is your area of interest?</h3>
			  {/* Repeat the label and input elements similar to the question above */}
			  <label>
				<input
				  type="radio"
				  name="userInterest"
				  checked={responses.userInterest === 'health'}
				  value="health"
				  onChange={(e) => handleResponseChange('userInterest', e.target.value)}
				></input>
				Health
			  </label>
			  <label>
			  <input
				type="radio"
				name="userInterest"
				checked={responses.userInterest === 'jobs'}
				value="jobs"
				onChange={(e) => handleResponseChange('userInterest', e.target.value)}
			  ></input>
			  Jobs
				</label>
			</div>
  
			<button type="submit">Submit</button>
		  </form>
		</div>
		) : (
			<Navigate replace to="/dashboard" />
		  )}
	  </div>
	);
  };
  



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
		  <Route path="/signup" element={<Signedup />} />
		  <Route path="/login" element={<LogInPage />} />
		  <Route path="/survey" element={<Survey />} />
		  <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
      </Router>
      <MainFooter />
      <UtilityFooter />
    </div>
  );
}

export default App;
