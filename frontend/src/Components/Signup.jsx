import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook instead of useHistory
import { UserContext } from '../Contexts/Usercontext'; // Import UserContexts
import axios from 'axios'; // Import axios
import '../Assets/styles/Signup.css';

const AuthenticationForm= () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { setUser } = useContext(UserContext);
   // Step 1: Create state for form fields
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });
  

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   if (email === correctEmail && password === correctPassword) {
  //     navigate('/'); // Use navigate instead of history.push
  //   } else {
  //     alert('Incorrect credentials');
  //   }
  // };

    // Step 2: Update state on input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    // Step 3: Handle form submission
    // Modified handleSubmit function
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      const endpoint = isSignUp ? `http://localhost:3001/signup/${formData.email}` : `http://localhost:3001/signin/${formData.email}`; // Adjust the endpoint as needed 
      const method = isSignUp ? 'POST' : 'PUT'; // Assuming POST for signup and PUT for signin, adjust as needed
  
      try {
          const response = await axios({
              method: method,
              url: endpoint,
              headers: {
                  'Content-Type': 'application/json',
              },
              data: formData,
          });
  
          console.log(isSignUp ? 'Account created successfully' : 'Signed in successfully', response.data);
          // Handle success (e.g., redirect to dashboard or display success message)
          setUser(response.data.user) // Set user context with response data
          navigate('/courses'); // Adjust the navigation path as needed
      } catch (error) {
          console.error(isSignUp ? 'Error creating account' : 'Error signing in', error);
      }
  };
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


  return (
    <div className={`auth-container ${isSignUp ? 'auth-right-panel-active' : ''}`}>
      <div className="auth-form-container auth-sign-up-container">
      <form onSubmit={handleSubmit} autoComplete='off'>
          <h1>Create Account</h1>
          <div className="auth-social-container">
            <a className="social"><i className="fab fa-facebook-f"></i></a>
            <a className="social"><i className="fab fa-google-plus-g"></i></a>
            <a className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <div className="auth-infield">
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
            <label></label>
          </div>
          <div className="auth-infield">
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <label></label>
          </div>
          <div className="auth-infield">
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <label></label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
      <div className="auth-form-container auth-sign-in-container">
      <form onSubmit={handleSubmit} autoComplete='off'>
          <h1>Sign in</h1>
          <div className="auth-social-container">
            <a className="social"><i className="fab fa-facebook-f"></i></a>
            <a className="social"><i className="fab fa-google-plus-g"></i></a>
            <a className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <div className="auth-infield">
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <label></label>
          </div>
          <div className="auth-infield">
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="Select Role" disabled placeholder="Select Role">Select Role</option>
              <option value="admin">Admin</option>
              <option value="learner">Learner</option>
            </select>
            <label></label>
          </div>
          <div className="auth-infield">
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <label></label>
          </div>
          <a className="forgot">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="auth-overlay-container">
        <div className="overlay">
          <div className="auth-overlay-panel auth-overlay-left">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={toggleForm}>Sign In</button>
            <button onClick={handleBack} className="back-button">Back</button> {/* Back button */}
          </div>
          <div className="auth-overlay-panel auth-overlay-right">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={toggleForm}>Sign Up</button>
            <button onClick={handleBack} className="back-button">Back</button> {/* Back button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationForm;