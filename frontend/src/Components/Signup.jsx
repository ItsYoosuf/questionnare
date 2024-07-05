import React, { useEffect } from 'react';
import '../Assets/styles/Signup.css'; // Assuming the CSS is in the same directory

const Signup = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const overlayBtn = document.getElementById('overlayBtn');

    const toggleOverlay = () => {
      container.classList.toggle('right-panel-active');
      overlayBtn.classList.remove('btnScaled');
      window.requestAnimationFrame(() => {
        overlayBtn.classList.add('btnScaled');
      });
    };

    overlayBtn.addEventListener('click', toggleOverlay);

    return () => {
      overlayBtn.removeEventListener('click', toggleOverlay);
    };
  }, []);

  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Authentication Forms</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body>
        <span className="big-circle">
          <span className="inner-circle"></span>
        </span>
        <img src="https://i.imgur.com/wcGWHvx.png" className="square" alt="" />
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <div className="infield">
                <input type="text" placeholder="Name" />
                <label></label>
              </div>
              <div className="infield">
                <input type="email" placeholder="Email" name="email" />
                <label></label>
              </div>
              <div className="infield">
                <input type="password" placeholder="Password" />
                <label></label>
              </div>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              <div className="infield">
                <input type="email" placeholder="Email" name="email" />
                <label></label>
              </div>
              <div className="infield">
                <input type="password" placeholder="Password" />
                <label></label>
              </div>
              <a href="#" className="forgot">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container" id="overlayCon">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button id="signUpBtn">Sign Up</button>
              </div>
            </div>
            <button id="overlayBtn"></button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Signup;