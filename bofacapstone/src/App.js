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
import ACDash from "./pages/acdash";
import ACEngage from "./pages/acengage";
import ACAccounts from "./pages/acaccounts";
import NewAcDash from "./pages/NewAcDash";
import EngagementDashboard from "./pages/EngagementDashboard";

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
          <Route path="/acengage" element={<EngagementDashboard />} />
          <Route path="/acaccounts" element={<ACAccounts />} />
          <Route path="/acdash" element={<NewAcDash />} />
        </Routes>
      </Router>
      <MainFooter />
      <UtilityFooter />
    </div>
  );
}

export default App;