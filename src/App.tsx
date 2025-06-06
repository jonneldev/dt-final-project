import React from 'react';
import './App.css';
import PerformanceSpotlights from './components/PerformanceSpotlights'
import GetInTouchForm from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      < PerformanceSpotlights />
      < GetInTouchForm />
      < Footer />
    </div>
  );
}

export default App;
