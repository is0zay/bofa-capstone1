import React, { useState } from 'react';
import './Survey.css';
import axios from 'axios'; // Import Axios


const Survey = () => {
  // State to store the user's responses
  const [responses, setResponses] = useState({
    userPurpose: '',
    userLocation: '',
    userInterest: '',
  });

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

      // TODO: You can add additional logic here upon successful submission

      console.log('Survey response submitted successfully');
    } catch (error) {
      // Handle error if the request fails
      console.error('Failed to submit survey response', error);
    }
  };

  return (
    <div className="survey-container">
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
              />
              Health
            </label>
			<label>
            <input
              type="radio"
              name="userInterest"
              checked={responses.userNavigate === 'jobs'}
			  value="jobs"
			  onChange={(e) => handleResponseChange('userInterest', e.target.value)}
            />
            Jobs
          	</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Survey;