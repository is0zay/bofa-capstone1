import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //importing to handle routing for the entire application
import "./App.css";
import Nav from "./components/utilityNav";
import MainNav from "./components/mainNav";
import MainFooter from "./components/mainFooter";
import Home from "./pages/home";
import UtilityFooter from "./components/utilityFooter";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <MainFooter />
      <UtilityFooter />
    </div>
  );
}

export default App;
