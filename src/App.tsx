import React from "react";
import "./App.css";
import PerformanceSpotlights from "./components/PerformanceSpotlights";
import Episodes from "./components/Episodes";
import Contact from "./components/contact"
import NavBarHero from "./components/NavBarHero";
import Footer from "./components/footer";
function App() {
  
  return (
    <div className="App">
      <NavBarHero />
      <PerformanceSpotlights />
      <Episodes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
