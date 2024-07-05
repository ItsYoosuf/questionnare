import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/landingpage';
import Signup from './Components/Signup'; // Import the Signup component
import Register from './Components/register'; // Import the Register component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes along with BrowserRouter and Route

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components with Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Adjusted for react-router-dom v6 syntax */}
          <Route path="/signup" element={<Signup />} /> {/* Adjusted for react-router-dom v6 syntax */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;