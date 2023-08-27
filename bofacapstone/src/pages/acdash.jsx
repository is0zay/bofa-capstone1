import React, {  useEffect } from 'react';
// import { useLocation } from "react-router-dom";


const ACDash = () => {

	useEffect(() => {
		// Sidebar selector/active class
		const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
	
		allSideMenu.forEach(item => {
		  const li = item.parentElement;
	
		  item.addEventListener('click', function () {
			allSideMenu.forEach(i => {
			  i.parentElement.classList.remove('active');
			})
			li.classList.add('active');
		  });
		});
	
		// Toggle Sidebar
		const menuBar = document.querySelector('#content nav .bx.bx-menu');
		const sidebar = document.getElementById('sidebar');
	
		menuBar.addEventListener('click', function () {
		  sidebar.classList.toggle('hide');
		});
	
		// Check if dark mode preference exists in local storage
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
	
		// Set the initial dark mode state
		const switchMode = document.getElementById('switch-mode');
		if (isDarkMode) {
		  document.body.classList.add('dark');
		  switchMode.checked = true;
		}
	
		// Function to handle the dark mode switch
		function handleDarkMode() {
		  if (this.checked) {
			document.body.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
		  } else {
			document.body.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
		  }
		}
	
		// Event listener for dark mode switch
		switchMode.addEventListener('change', handleDarkMode);
	
		// Cleanup by removing event listeners when the component unmounts
		return () => {
		  allSideMenu.forEach(item => {
			item.removeEventListener('click', () => {});
		  });
	
		  menuBar.removeEventListener('click', () => {});
		  switchMode.removeEventListener('change', handleDarkMode);
		};
	  }, []); 
 

  const cssStyle = `
  <style>
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

:root {
    --poppins: 'Poppins', sans-serif;
    --lato: 'Lato', sans-serif;

    --light: #F9F9F9;
    --blue: #e31836;
    --light-blue: #CFE8FF;
    --grey: #eee;
    --dark-grey: #AAAAAA;
    --dark: #000; /* Change to black */
    --red: #DB504A;
    --yellow:#CFE8FF;
    --light-yellow:
#e31836 ;
    --orange: #FD7238;
    --light-orange: #FFE0D3;
}

html {
	overflow-x: hidden;
}

body.dark {
    --light:#012169 ; /* Change */
    --grey: #ffffff;
    --dark: #FBFBFB;
}

body {
    background: var(--grey);
    overflow-x: hidden;
}

/* Hide Nav and Footer */
.utilityNav {
	display: none;
}
.navbar{
	display: none;
}
.footer-content, .utilityFooter{
	display: none;
}


/* SIDEBAR */
#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: var(--light);
	z-index: 2000;
	font-family: var(--lato);
	transition: .3s ease;
	overflow-x: hidden;
	scrollbar-width: none;
}
#sidebar::--webkit-scrollbar {
	display: none;
}
#sidebar.hide {
	width: 60px;
}
#sidebar .brand {
	font-size: 24px;
	font-weight: 700;
	height: 56px;
	display: flex;
	align-items: center;
	color: var(--blue);
	position: sticky;
	top: 0;
	left: 0;
	background: var(--light);
	z-index: 500;
	padding-bottom: 20px;
	box-sizing: content-box;
}
#sidebar .brand .bx {
	min-width: 60px;
	display: flex;
	justify-content: center;
}
#sidebar .side-menu {
	width: 100%;
	margin-top: 48px;
}
#sidebar .side-menu li {
	height: 48px;
	background: transparent;
	margin-left: 6px;
	border-radius: 48px 0 0 48px;
	padding: 4px;
}
/* Makes indent on sidebar */
#sidebar .side-menu li.active {
	background: var(--grey);
	position: relative;
}
#sidebar .side-menu li.active::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li a {
	width: 100%;
	height: 100%;
	background: var(--light);
	display: flex;
	align-items: center;
	border-radius: 48px;
	font-size: 16px;
	color: var(--dark);
	white-space: nowrap;
	overflow-x: hidden;
}
#sidebar .side-menu.top li.active a {
	color: var(--blue);
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2));
	transition: width .3s ease;
}
#sidebar .side-menu li a.logout {
	color: var(--red);
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue);
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2));
	display: flex;
	justify-content: center;
}
/* SIDEBAR */





/* CONTENT */
#content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
}




/* NAVBAR */
#content nav {
	height: 56px;
	background: var(--light);
	padding: 0 24px;
	display: flex;
	align-items: center;
	grid-gap: 24px;
	font-family: var(--lato);
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
}
#content nav::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	bottom: -40px;
	left: 0;
	border-radius: 50%;
	box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
	color: var(--dark);
}
#content nav .bx.bx-menu {
	cursor: pointer;
	color: var(--dark);
}
#content nav .nav-link {
	font-size: 16px;
	transition: .3s ease;
}
#content nav .nav-link:hover {
	color: var(--blue);
}
#content nav form {
	max-width: 400px;
	width: 100%;
	margin-right: auto;
}
#content nav form .form-input {
	display: flex;
	align-items: center;
	height: 36px;
}
#content nav form .form-input input {
	flex-grow: 1;
	padding: 0 16px;
	height: 100%;
	border: none;
	background: var(--grey);
	border-radius: 36px 0 0 36px;
	outline: none;
	width: 100%;
	color: var(--dark);
}
#content nav form .form-input button {
	width: 36px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--blue);
	color: var(--light);
	font-size: 18px;
	border: none;
	outline: none;
	border-radius: 0 36px 36px 0;
	cursor: pointer;
}

/* DELETE nav class="notification" */

/* #content nav .notification {
	font-size: 20px;
	position: relative;
}
#content nav .notification .num {
	position: absolute;
	top: -6px;
	right: -6px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--light);
	background: var(--red);
	color: var(--light);
	font-weight: 700;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
} */

/* DELETE nav class="profile" */
/* #content nav .profile img {
	width: 36px;
	height: 36px;
	object-fit: cover;
	border-radius: 50%;
} */

#content nav .switch-mode {
	display: block;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	background: var(--grey);
	cursor: pointer;
	position: relative;
}
#content nav .switch-mode::before {
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	bottom: 2px;
	width: calc(25px - 4px);
	background: var(--blue);
	border-radius: 50%;
	transition: all .3s ease;
}
/* Makes switch button move */
#content nav #switch-mode:checked + .switch-mode::before {
	left: calc(100% - (25px - 4px) - 2px);
}
/* NAVBAR */





/* MAIN */
#content main {
	width: 100%;
	padding: 36px 24px;
	font-family: var(--poppins);
	max-height: calc(100vh - 56px);
	overflow-y: auto;
}
#content main .head-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-gap: 16px;
	flex-wrap: wrap;
}

/* DELETE div class=left */
/* #content main .head-title .left h1 {
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 10px;
	color: var(--dark);
} */

#content main .head-title .left .breadcrumb {
	display: flex;
	align-items: center;
	grid-gap: 16px;
}
#content main .head-title .left .breadcrumb li {
	color: var(--dark);
}
#content main .head-title .left .breadcrumb li a {
	color: var(--dark-grey);
	pointer-events: none;
}
#content main .head-title .left .breadcrumb li a.active {
	color: var(--blue);
	pointer-events: unset;
}

/* DELETE for btn-download */
/* #content main .head-title .btn-download {
	height: 36px;
	padding: 0 16px;
	border-radius: 36px;
	background: var(--blue);
	color: var(--light);
	display: flex;
	justify-content: center;
	align-items: center;
	grid-gap: 10px;
	font-weight: 500;
} */

#content main .box-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-gap: 24px;
    margin-top: 36px;
}

#content main .box-info li {
    flex-basis: calc(50% - 12px);
    margin-bottom: 24px;
    padding: 24px;
    background: var(--light);
    border-radius: 20px;
    display: flex;
    align-items: center; /* Center vertically */
    text-align: left; /* Align text to the left */
}

#content main .box-info li .box {
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: space-between; /* Space between icon and text */
    width: 100%;
}
#content main .box-info li .icon {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    font-size: 36px;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

#content main .box-info li:nth-child(1) .icon {
    background: var(--light-blue);
    color: var(--dark-light);
}

#content main .box-info li:nth-child(2) .icon {
    background: var(--light-yellow);
    color: var(--light-blue);
}

#content main .box-info li:nth-child(3) .icon {
    background: var(--light-blue);
    color: var(--blue);
}




#content main .box-info li .text {
    flex-grow: 1;
    padding-left: 16px; /* Add some spacing between icon and text */
}

#content main .box-info li .text h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--dark);
}

#content main .box-info li .text p {
    color: var(--dark);
}



.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300px;
		width: 500px;
		background-color: lightgray;
		font-size: 96px;
		font-weight: bold;
		background-color: white;
		border: 1px solid #ccc;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
		margin: 0 auto; /* Add this line to center the container horizontally */
		margin-top: 50vh; /* Add this line to center the container vertically */
		transform: translateY(-50%); /* Add this line to adjust the vertical centering */
	}
	



@media screen and (max-width: 768px) {
	#sidebar {
		width: 200px;
	}

	#content {
		width: calc(100% - 60px);
		left: 200px;
	}

	#content nav .nav-link {
		display: none;
	}
}






@media screen and (max-width: 576px) {
	#content nav form .form-input input {
		display: none;
	}

	#content nav form .form-input button {
		width: auto;
		height: auto;
		background: transparent;
		border-radius: none;
		color: var(--dark);
	}

	#content nav form.show .form-input input {
		display: block;
		width: 100%;
	}
	#content nav form.show .form-input button {
		width: 36px;
		height: 100%;
		border-radius: 0 36px 36px 0;
		color: var(--light);
		background: var(--red);
	}

	#content nav form.show ~ .notification,
	#content nav form.show ~ .profile {
		display: none;
	}

	#content main .box-info {
	display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-gap: 24px;
    margin-top: 36px;
	}

	#content main .table-data .head {
		min-width: 420px;
	}
	#content main .table-data .order table {
		min-width: 420px;
	}
	#content main .table-data .todo .todo-list {
		min-width: 420px;
	}
}
 
</style>

  `;

  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>

	<title>Dashboard</title>
	<style>
	/* Additional styles for this HTML go here */
  </style>
</head>
<body>


	<!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-dashboard'></i>
			<span class="text">BOA</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href=/acdash>
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href=/acengage>
					<i class='bx bxs-show' ></i>
					<span class="text">Engagement</span>
				</a>
			</li>
			<li>
				<a href=/acaccounts>
					<i class='bx bxs-group' ></i>
					<span class="text">Accounts</span>
				</a>
			</li>
			<!-- DELETE Team on Sidebar -->
			<!-- <li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
				</a>
			</li> -->
		</ul>
		<ul class="side-menu">
			<!-- DELETE Settings on Sidebar -->
			<!-- <li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li> -->
		</ul>
	</section>
	<!-- SIDEBAR -->



	<!-- CONTENT -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' ></i>
			<form action="#">
				<div class="form-input">
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" class="switch-mode"></label>
		
		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<div class="head-title">
				<h1>Dashboard</h1>
				<!-- <div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div> -->

<!-- DELETE btn-download-->
				<!-- <a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Download PDF</span>
				</a> -->  

			</div>

			<ul class="box-info">
			<li>
				<a href=/acdash>
					<div class="box">
						<div class="icon">
							<i class='bx bxs-dashboard'></i>
						</div>
						<div class="text">
							<h3>Dashboard</h3>
							<p>View Dashboard</p>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a href=/acengage>
					<div class="box">
						<div class="icon">
							<i class='bx bxs-show'></i>
						</div>
						<div class="text">
							<h3>Engagement</h3>
							<p>Track Engagement</p>
						</div>
					</div>
				</a>
			</li>
			<li>
				<a href=/acaccounts>
					<div class="box">
						<div class="icon">
							<i class='bx bxs-group'></i>
						</div>
						<div class="text">
							<h3>Accounts</h3>
							<p>User Accounts</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
		

<!-- DELETE table-data -->
			<!-- <div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Recent Orders</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Todos</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div> -->
		</main>
		<!-- MAIN -->
	</section>
	<!-- CONTENT -->
	


</body>
</html>
  `;
 
  return (
    <div>
      <style>{cssStyle}</style>
      {/* The HTML content goes here */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};


export default ACDash;
