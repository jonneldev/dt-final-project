import React from "react";
import "./App.css";
import PerformanceSpotlights from "./components/PerformanceSpotlights";
import Contact from "./components/contact";
import NavBarHero from "./components/NavBarHero";
function App() {
  return (
    <div className="App">
      <NavBarHero />
      <PerformanceSpotlights />
      <Contact />
    </div>
  );
}

export default App;
