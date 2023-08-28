import React from 'react';

const Dashboard = () => {
  // Retrieve user information from the server or local storage
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  };

  return (
    <div>
      <h2>Welcome to your Dashboard, {user.firstName}!</h2>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      {/* Display additional user information or functionality */}
	  
    </div>
  );
};

export default Dashboard;