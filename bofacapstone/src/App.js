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
import About from "./pages/about";
import AboutImportance from "./pages/aboutImportance";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/importance" element={<AboutImportance />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <MainFooter />
      <UtilityFooter />
    </div>
  );
}

export default App;
