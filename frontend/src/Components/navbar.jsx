import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Contexts/Usercontext';
import '../Assets/styles/navbar.css'
const Navbar = () => {
  const { user } = useContext(UserContext); // Access user context
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
          <div className="navbar-links">
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.name}</span>
              <button className="btn btn-outline-success">Sign Out</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/signup" className="btn btn-outline-success">Sign Up</Link>
            </div>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;