import React from 'react';
import { Fragment } from 'react';
import '../Assets/styles/navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <nav id="options">
        <div id='logo-container'>       
        </div>
        <div id='butn-container'>
          <button type='button' className='butn'>About Us</button>
          <button type='button' className='butn'>News</button>
          <button type='button' className='butn'>Events</button>
          <button type='button' className='butn'>Gallery</button>
          <button type='button' className='butn'>Certificates</button>
          <button type='button' className='butn'>Contact</button>
          <button type='button' className='auth-btn'>Sign Up</button>
          <button type='button' className='auth-btn'>Login</button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;