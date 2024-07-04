import { memo } from 'react';

import resets from '../Assets/styles/_resets.login.module.css'
import classes from '../Assets/styles/LoginPage.module.css';

const LoginPage = memo(function LoginPage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root} container-fluid`}>
      <div className={`${classes.rectangle20} shadow`}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.frame6}>
        <h2 className={`${classes.welcomeBack} text-white`}>Welcome back.....</h2>
        <p className={`${classes.curabiturVariusBlanditLoremQui} text-white`}>
          Curabitur varius blandit lorem quis tincidunt. Ut lorem justo, luctus.
        </p>
        <h3 className={`${classes.orCreateAnAccount} text-white`}>Or create an account</h3>
        <a href="/signup" className={`${classes.group16} btn btn-light`}>
          Sign Up
        </a>
      </div>
      <form className="login-form">
        <div className={`${classes.rectangle23} form-group`}>
          <label htmlFor="emailInput" className={`${classes.email} form-label`}>Email</label>
          <input type="email" id="emailInput" className="form-control" />
        </div>
        <div className={`${classes.rectangle24} form-group`}>
          <label htmlFor="passwordInput" className={`${classes.password} form-label`}>Password</label>
          <input type="password" id="passwordInput" className="form-control" />
        </div>
        <button type="submit" className={`${classes.rectangle262} btn btn-success`}>
          Login
        </button>
      </form>
      <a href="#" className={`${classes.forgotPassword} text-muted`}>Forgot Password ?</a>
      <div className={classes.frame11}></div>
    </div>
  );
});

export default LoginPage;