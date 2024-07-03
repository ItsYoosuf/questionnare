import React from 'react';
import './App.css';
import LandingPage from './Components/landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> {/* Wrap your application in the Router component */}
      <div className="App">
        <LandingPage /> {/* Add the Landing Page component */}
      </div>
    </Router>
  );
}

export default App;