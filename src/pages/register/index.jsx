import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterStyles } from './styles'; 
import InputComponent from '../../components/common/input-component';
import CustomButton from '../../components/common/custome-button';
import { useRegisterController } from './controller';

const Register = () => {
  // Destructure state values and submit logic from the page controller
  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    agreeTerms, setAgreeTerms,
    createAccount
  } = useRegisterController();

  return (
    <RegisterStyles>
      <div className="register-wrapper">
        <div className="register-card">
          <h2>Create Account</h2>
          
          <form onSubmit={createAccount}>
           
            <div className="name-row">
              <div>
                <InputComponent 
                  fieldLabel="First Name"
                  placeholder="John"
                  type="text"
                  fieldValue={firstName}
                  onChangeFunction={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <InputComponent 
                  fieldLabel="Last Name"
                  placeholder="Doe"
                  type="text"
                  fieldValue={lastName}
                  onChangeFunction={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email field  */}
            <InputComponent 
              fieldLabel="Email Address"
              placeholder="user@digisou.com"
              type="email"
              fieldValue={email}
              onChangeFunction={(e) => setEmail(e.target.value)}
              icon="envelope" 
            />

            {/* Password input */}
            <InputComponent 
              fieldLabel="Password"
              placeholder="Minimum 6 characters"
              type="password"
              fieldValue={password}
              onChangeFunction={(e) => setPassword(e.target.value)}
              icon="lock"
            >
              <i className="bi bi-eye"></i>
            </InputComponent>

            {/* Confirm password input  */}
            <InputComponent 
              fieldLabel="Confirm Password"
              placeholder="Repeat your password"
              type="password"
              fieldValue={confirmPassword}
              onChangeFunction={(e) => setConfirmPassword(e.target.value)}
              icon="lock"
            >
              <i className="bi bi-eye"></i>
            </InputComponent>

            {/*  checkbox  */}
            <div className="remember-row">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>

            <CustomButton text="CREATE ACCOUNT" type="submit" />
          </form>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          {/* Social buttons  */}
          <div className="social-login-wrapper">
           
            <CustomButton 
              text="Google"
              className="social-btn"
              onClick={() => console.log("Google Sign Up")}
            />
            <CustomButton 
              text="Facebook"
              className="social-btn"
              icon="facebook"
              onClick={() => console.log("Facebook Sign Up")}
            />
          </div>

          <p className="signup-text">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>

        <Link to="/login" className="back-home">
          Back to Home
        </Link>
      </div>
    </RegisterStyles>
  );
};

export default Register;
