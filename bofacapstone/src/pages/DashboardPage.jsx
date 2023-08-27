// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Redirect, Route } from 'react-router-dom';

// Create the Dashboard component
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

// Modify the Survey component
const Survey = () => {
  const [responses, setResponses] = useState({
    userPurpose: '',
    userLocation: '',
    userInterest: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false);

  const history = useHistory();

  const handleResponseChange = (question, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3003/api/survey', responses);

      setIsSubmitted(true);

      console.log('Survey response submitted successfully');

      setTimeout(() => {
        history.push('/dashboard');
      }, 2000);
    } catch (error) {
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
      <div className="survey-form">
        <h1>Complete this short survey</h1>
        {!hasCompletedSurvey ? (
          <form onSubmit={handleSubmit}>
            {/* Survey form code */}
          </form>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </div>
    </div>
  );
};

// Render the Survey component and the Dashboard route
const App = () => {
  return (
    <div>
      <Route exact path="/" component={Survey} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;