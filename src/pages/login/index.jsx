import React from 'react';
import { Link } from 'react-router-dom';
import { LoginStyles } from './styles'; 
import InputComponent from '../../components/common/input-component'; 
import CustomButton from '../../components/common/custome-button';
import { useLoginController } from './controller';

const Login = () => {
  const {
    email, setEmail,
    password, setPassword,
    rememberMe, setRememberMe,
    login,
    googleLogin,
    facebookLogin,
    forgotPassword
  } = useLoginController();

  return (
    <LoginStyles>
      <div className="login-wrapper">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in to your DKUST account</p>
          
          <form id="loginForm" onSubmit={login}>
            <InputComponent 
              fieldLabel="Email Address"
              placeholder="you@example.com"
              type="email"
              fieldValue={email}
              onChangeFunction={(e) => setEmail(e.target.value)}
              icon="envelope"
            />

            <div className="password-wrapper-box">
  
  <div className="password-row">
    <label htmlFor="password">Password</label>
    <a href="#!" id="forgotPassword" onClick={forgotPassword}>
      Forgot password?
    </a>
  </div>
  
  <InputComponent 
    fieldLabel="" 
    placeholder="please Enter Password"
    type="password"
    fieldValue={password}
    onChangeFunction={(e) => setPassword(e.target.value)}
    icon="lock"
  >
    <i className="bi bi-eye"></i>
  </InputComponent>
</div>


            <div className="remember-row">
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            <CustomButton text="SIGN IN" type="submit" />
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login-wrapper">
            
            <CustomButton 
              text="Google"
              className="social-btn"
              onClick={googleLogin}
            />
            <CustomButton 
              text="Facebook"
              className="social-btn"
              icon="facebook"
              onClick={facebookLogin}
            />
          </div>

          <p className="signup-text">
            Don't have an account? <Link to="/register" >Sign up</Link>
          </p>
        </div>

        <Link to="/register" className="back-home">
          Back to Home
        </Link>
      </div>
    </LoginStyles>
  );
};

export default Login;
