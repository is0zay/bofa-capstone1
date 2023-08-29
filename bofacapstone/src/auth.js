export const isAuthenticated = () => {
	const token = localStorage.getItem('token');
	return !!token; // Returns true if token exists, false otherwise
  };

  export const logout = () => {
	// Remove the authentication token from local storage or perform other logout actions
	localStorage.removeItem('token');
  };