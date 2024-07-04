import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/styles/Signup.css'; // Import the CSS file here

const CreateAccountPage = () => {
  return (
    <div className="container vh-100 d-flex flex-column align-items-start bg-white overflow-hidden">
      <div className="position-absolute container-custom"></div>
      <div className="position-absolute secondary-container"></div>
      <div className="position-absolute d-flex flex-column align-items-center gap-3 text-section">
        <div className="text-large">Hello.....</div>
        <div className="text-medium">
          Curabitur varius blandit lorem quis tincidunt. Ut lorem justo, luctus.
        </div>
        <div className="text-bold">Or use your account</div>
        <a href="/login" className="btn btn-light btn-custom">
          Login
        </a>
      </div>
      <form className="d-flex flex-column position-absolute form-custom">
        <input type="text" placeholder="Name" className="form-control input-custom" />
        <input type="email" placeholder="Email" className="form-control input-custom" />
        <input type="password" placeholder="Password" className="form-control input-custom" />
        <input type="password" placeholder="Re-enter Password" className="form-control input-custom" />
        <button type="submit" className="btn btn-signup">
          Sign Up
        </button>
      </form>
      <div className="title">Create Account</div>
    </div>
  );
};

export default CreateAccountPage;