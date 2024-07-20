import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook instead of useHistory
import '../Assets/styles/Signup.css';

const AuthenticationForm= () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleForm = () => {
    console.log(isSignUp); 
    setIsSignUp(!isSignUp);
  };

  const handleBack = () => {
    navigate('/'); // Navigate to homepage
  };

  useEffect(() => {
    // This effect uses the navigate function to change the URL
    // based on the isSignUp state without reloading the component.
    const path = isSignUp ? '/signup' : '/signin';
    navigate(path, { replace: true });
  }, [isSignUp, navigate]); // Depend on isSignUp and navigate

  
  const correctEmail = "u@g.com";
  const correctPassword = "123";

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      navigate('/'); // Use navigate instead of history.push
    } else {
      alert('Incorrect credentials');
    }
  };

  return (
    <div className={`auth-container ${isSignUp ? 'auth-right-panel-active' : ''}`}>
      <div className="auth-form-container auth-sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="auth-social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <div className="auth-infield">
            <input type="text" placeholder="Name" />
            <label></label>
          </div>
          <div className="auth-infield">
            <input type="email" placeholder="Email" name="email" />
            <label></label>
          </div>
          <div className="auth-infield">
            <input type="password" placeholder="Password" />
            <label></label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="auth-form-container auth-sign-in-container">
      <form onSubmit={handleSignIn} autoComplete='off'>
          <h1>Sign in</h1>
          <div className="auth-social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <div className="auth-infield">
          <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label></label>
          </div>
          <div className="auth-infield">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label></label>
          </div>
          <a href="#" className="forgot">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="auth-overlay-container">
        <div className="overlay">
          <div className="auth-overlay-panel auth-overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={toggleForm}>Sign In</button>
            <button onClick={handleBack} className="back-button">Back</button> {/* Back button */}
          </div>
          <div className="auth-overlay-panel auth-overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={toggleForm}>Sign Up</button>
            <button onClick={handleBack} className="back-button">Back</button> {/* Back button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationForm;