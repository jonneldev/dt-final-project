import React from "react";
import "./App.css";
import PerformanceSpotlights from "./components/PerformanceSpotlights";
import Episodes from "./components/Episodes";
import Contact from "./components/contact";
import NavBarHero from "./components/NavBarHero";
function App() {
  return (
    <div className="App">
      <NavBarHero />
      <PerformanceSpotlights />
      <Episodes />
      <Contact />
    </div>
  );
}

export default App;
