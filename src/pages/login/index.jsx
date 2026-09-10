import React from 'react';
import { Link } from 'react-router-dom';
import { LoginStyles } from './styles'; 
import InputComponent from '../../components/common/inputs/input-component'; 
import CustomButton from '../../components/common/custome-button';
import { useFormik } from 'formik';
import { loginSchema } from './schema';

const Login = () => {
  
  const formik = useFormik({
     initialValues: {
      email: "",
      password: "",
      rememberMe: false
     },
     validationSchema: loginSchema,
     onSubmit: (values) => {
       
       console.log(values);
     }
  });

 
  const connectField = (name) => {
    const hasError = formik.touched[name] && formik.errors[name];
    return {
      name, 
      fieldValue: formik.values[name],
      onChangeFunction: (value) => formik.setFieldValue(name, value),
      onBlurFunction: () => formik.setFieldTouched(name, true),
      errorMessage: hasError ? formik.errors[name] : null,
      className: hasError ? "input-field-error" : "",
    };
  };


  const emailField = { 
    fieldLabel: "Email Address", 
    placeholder: "you@example.com", 
    type: "email", 
    icon: "envelope", 
    ...connectField("email") 
  };
  
  const passwordField = { 
    fieldLabel: "", 
    placeholder: "Enter your password", 
    type: "password", 
    icon: "lock", 
    ...connectField("password") 
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password clicked");
  };

  return (

    <LoginStyles>
      <div className="container">
        <div className="login-wrapper">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <p className="login-subtitle">Sign in to your DKUST account</p>
            
            <form id="loginForm" onSubmit={formik.handleSubmit} noValidate>
              
              
              <div className="form-field-spacing">
                <InputComponent itemObject={emailField} />
              </div>

              
              <div className="form-field-spacing">
                <div className="password-wrapper-box">
                  <div className="password-row">
                    <label htmlFor="password">Password</label>
                    <a href="#!" id="forgotPassword" onClick={handleForgotPassword}>
                      Forgot password?
                    </a>
                  </div>
                  
                  <InputComponent itemObject={passwordField}>
                    <i className="bi bi-eye"></i>
                  </InputComponent>
                </div>
              </div>

              <div className="remember-row">
                <input 
                  type="checkbox" 
                  id="remember" 
                  name="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={(e) => formik.setFieldValue("rememberMe", e.target.checked)}
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
                onClick={() => console.log("Sign in with Google")}
              />
              <CustomButton 
                text="Facebook"
                className="social-btn"
                icon="facebook"
                onClick={() => console.log("Sign in with Facebook")}
              />
            </div>

            <p className="signup-text">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>

          <Link to="/" className="back-home">
            Back to Home
          </Link>
        </div>
      </div>
    </LoginStyles>
  );
};

export default Login;
