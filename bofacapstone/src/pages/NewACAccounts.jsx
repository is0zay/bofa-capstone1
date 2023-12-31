import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './NewACAccounts.css';
import { Helmet } from 'react-helmet';

import axios from 'axios';

const NewACAccounts = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarHidden, setSidebarHidden] = useState(false);

	const [users, setUsers] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchUsers = async () => {
		  try {
			const response = await axios.get('https://bofa-cap2.onrender.com/list-users');
			console.log(response);
			setUsers(response.data);
		  } catch (error) {
			console.error('Error fetching users:', error);
		  }
		};
	
		fetchUsers();
	  }, []);

	  console.log(users);
     // Function to toggle dark mode
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

   // Function to handle search input change
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter users based on search term
  const filteredUsers = users
    ? users.filter((user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];


  return (
    <div>

		<Helmet>
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
     <section id="sidebar" className={sidebarHidden ? 'hide' : ''}>
     <Link to="/" className="brand">
  <img src="./nav/boalogo.png" alt="website logo" />
</Link>

        <ul class="side-menu top">
            <li>
                <Link to='/acdash'>
                    <i class='bx bxs-dashboard' ></i>
                    <span class="text">Dashboard</span>
                </Link>
            </li>
            
            <li>
                <Link to="/acengage">
                  <i class='bx bxs-show'></i>
                  <span class="text">Engagement</span>
                </Link>
              </li>
            <li class="active">
                <Link to="/acaccounts">
                    <i class='bx bxs-message-dots'></i>
                    <span class="text">Accounts</span>
                </Link>
            </li>
        </ul>
        <ul class="side-menu">
            <li>
                <Link to="#">
                    <i class='bx bxs-cog' ></i>
                    <span class="text">Settings</span>
                </Link>
            </li>
        </ul>
    </section>
   
    <section id="content">
        <nav>
            <i class='bx bx-menu' onClick={toggleSidebar}></i>
            <form action="#">
                <div class="form-input">
                <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
                    <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden checked={darkMode} onChange={toggleDarkMode}/>
            <label for="switch-mode" class="switch-mode"></label>
        </nav>

        <div className='accounts-list'>
          <h1>User Accounts</h1>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <h2>{user.first_name} {user.last_name}</h2>
                <p>Email: {user.email}</p>
                {/* Other user details */}
              </div>
            ))
          ) : (
            <div className="loading-screen">
              <h2>Loading...</h2>
            </div>
          )}
		</div>
    </section>
    </div>
  )
}
export default NewACAccounts;