import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Engage.css"

const EngagementDashboard = () => {
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
        
        <section id="sidebar" className={sidebarHidden ? 'hide' : ''}>
		<Link to="#" class="brand">
			<i class='bx bxs-dashboard'></i>
			<span class="text">BOA</span>
		</Link>
		<ul class="side-menu top">
			<li>
				<Link to="/acdash">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</Link>
			</li>
			<li class="active">
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
                <input type="checkbox" id="switch-mode" hidden checked={darkMode} onChange={toggleDarkMode} />
                <label for="switch-mode" class="switch-mode"></label>
                <span id="username-section"></span>
            </nav>
            
        <div class="counter">
               <h1>Website Engagement</h1> 
            </div>
            <div class="containerf">
                <button id="counterButton">Click to increment counter</button>
                <p id="counterValue">0</p>
                
            </div>
        </section>
            
    </div>
  )
}

export default EngagementDashboard