

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./mainNav.css";

// const MainNav = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <ul className={`navList ${mobileMenuOpen ? "active" : ""}`}>
//           <li className="navLogo">
//             <Link to="/">
//               <img src="./nav/boaLogo.png" alt="website logo" />
//             </Link>
//           </li>
//           <li className="navItem dropdown">
//             <Link to="/" className="navLink">
//               Home
//             </Link>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/home/health">Health</Link>
//               </li>
//               <li>
//                 <Link to="/home/jobs">Jobs</Link>
//               </li>
//             </ul>
//           </li>
//           {/* ... (other menu items) */}
//           <li className="navItem dropdown">
//             <Link to="/about" className="navLink">
//               About
//             </Link>

//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/about/history">History</Link>
//               </li>

//               <li>
//                 <Link to="/about/importance">Importance</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="navItem dropdown">
//             <Link to="/newsletter" className="navLink">
//               Newsletter
//             </Link>

//             <ul className="dropdown-menu">
//               <li>
//                 <Link to="/newsletter/latest">Latest</Link>
//               </li>

//               <li>
//                 <Link to="/newsletter/articles">Articles</Link>
//               </li>
//             </ul>
//           </li>

//           <li className="navItem dropdown">
//             <Link to="/contact" className="navLink">
//               Contact
//             </Link>
//           </li>

//           <li className="navItem dropdown">
//             <Link to="/" className="navLink">
//               Survey
//             </Link>
//           </li>

//           <li className="userIcon">
//             <img src="./nav/user.png" className="userIcon" alt="user Icon" />
//           </li>
//         </ul>
//         <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//           <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default MainNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainNav.css";
import { useCounter } from '../pages/counter'; 


const MainNav = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const {incrementCounter } = useCounter();

  const handleClick = () => {
    console.log('Button clicked'); // Add this line to check if the button click is registered.
    incrementCounter();
  };

  return (
    <div>
      <nav className="navbar">
        <ul className={`navList ${mobileMenuOpen ? "active" : ""}`}>
          <li className="navLogo">
            <Link to="/">
              <img src="./nav/boalogo.png" alt="website logo" />
            </Link>
          </li>
          <li className="navItem dropdown">
            <Link to="/" className="navLink" onClick={closeMobileMenu}>
              Home
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link to="/health" onClick={handleClick}>
            Health
          </Link>
        </li>
        <li>
          <Link to="/home/jobs" onClick={handleClick}>
            Jobs
          </Link>
              </li>
            </ul>
          </li>

          <li className="navItem dropdown">
            <Link to="/about" className="navLink" onClick={closeMobileMenu}>
              About
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link to="/about/history">History</Link>
              </li>

              <li>
                <Link to="/about/importance">Importance</Link>
              </li>
            </ul>
          </li>

          <li className="navItem dropdown">
            <Link
              to="/newsletter"
              className="navLink"
              onClick={closeMobileMenu}
            >
              Newsletter
            </Link>

            <ul className="dropdown-menu">
              <li>
                {/* <Link
                  to="/newsletter#latest">
                  Latest
                </Link> */}
                <a href="/newsletter#latest">Latest</a>
              </li>

              <li>

                {/* <Link
                  to="/newsletter#articles">
                  Articles
                </Link> */}
        
                <Link to="/newsletter#articles">Articles</Link>

              </li>
            </ul>
          </li>

          <li className="navItem dropdown">
            <Link to="/contact" className="navLink" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className="navItem dropdown">
            <Link to="/survey" className="navLink" onClick={closeMobileMenu}>
              Survey
            </Link>
          </li>

          <li className="userIcon">
            <img src="./nav/user.png" className="userIcon" alt="user Icon" />
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
