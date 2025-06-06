import React from "react";
import "./App.css";
import PerformanceSpotlights from "./components/PerformanceSpotlights";
import Episodes from "./components/Episodes";
import Search from "./components/Search";
import ContactForm from "./components/ContactForm";
import NavBarHero from "./components/NavBarHero";
import Footer from "./components/Footer";
function App() {
  
  return (
    <div className="App">
      <NavBarHero />
      <PerformanceSpotlights />
      <Search />
      <Episodes />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
