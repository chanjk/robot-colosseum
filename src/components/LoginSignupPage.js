import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginSignupPage = ({ onLogin, onSignup, loginErrors = {}, signupErrors = {} }) => (
  <div id="login-signup">
    <header>
      <h1>Robot Colosseum</h1>
    </header>
    <LoginForm onLogin={onLogin} errors={loginErrors} />
    <h4>Or, if you want to create a new robot</h4>
    <SignupForm onSignup={onSignup} errors={signupErrors} />
  </div>
);

export default LoginSignupPage;
