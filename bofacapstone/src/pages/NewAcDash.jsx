import React, { useState } from 'react';
import './NewAcDash.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NewAcDash = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarHidden, setSidebarHidden] = useState(false);


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
		<Link to="#" class="brand">
			<i class='bx bxs-dashboard'></i>
			<span class="text">BOA</span>
		</Link>
		<ul class="side-menu top">
			<li class="active">
				<Link to="/acdash">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link to="/acengage">
					<i class='bx bxs-show' ></i>
					<span class="text">Engagement</span>
				</Link>
			</li>
			<li>
				<Link to="/acaccounts">
					<i class='bx bxs-group' ></i>
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
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden  checked={darkMode} onChange={toggleDarkMode}/>
			<label for="switch-mode" class="switch-mode"></label>
		
		</nav>
		
		<main>
			<div class="head-title">
				<h1>Dashboard</h1>
			</div>

			<ul class="box-info">
			<li>
				<Link to='/acdash'>
					<div class="box">
						<div class="icon">
							<i class='bx bxs-dashboard'></i>
						</div>
						<div class="text">
							<h3>Dashboard</h3>
							<p>View Dashboard</p>
						</div>
					</div>
				</Link>
			</li>
			<li>
				<Link to='/acengage' >
					<div class="box">
						<div class="icon">
							<i class='bx bxs-show'></i>
						</div>
						<div class="text">
							<h3>Engagement</h3>
							<p>Track Engagement</p>
						</div>
					</div>
				</Link>
			</li>
			<li>
				<Link to="/acaccounts">
					<div class="box">
						<div class="icon">
							<i class='bx bxs-group'></i>
						</div>
						<div class="text">
							<h3>Accounts</h3>
							<p>User Accounts</p>
						</div>
					</div>
				</Link>
			</li>
		</ul>
		


	
		</main>
		
	</section>
	
    </div>
  )
}

export default NewAcDash;