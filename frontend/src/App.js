import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './Contexts/Usercontext';
import LandingPage from './Components/landingpage';
import Signup from './Components/Signup'; // Import the Signup component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes along with BrowserRouter and Route

function App() {
  return (
    <UserProvider>
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components with Routes */}
          <Route path="/" element={<LandingPage />} /> {/* Adjusted for react-router-dom v6 syntax */}
          <Route path="/signin" element={<Signup />} /> {/* Adjusted for react-router-dom v6 syntax */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;