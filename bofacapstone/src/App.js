
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //importing to handle routing for the entire application
import "./App.css";
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
import Survey from "./components/Survey";


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
        </Routes>
      </Router>
      <MainFooter />
      <UtilityFooter />
    </div>
  );
}

export default App;
