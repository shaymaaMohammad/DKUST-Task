import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterStyles } from './styles'; 
import InputProvider from '../../components/common/inputs/input-provider';
import { InputTypes } from '../../constants/enums';
import CustomButton from '../../components/common/custome-button';
import { useFormik } from 'formik';
import { signupSchema } from './schema';
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authSlice";
import SuccessCard from "../../components/success-card";
import PasswordStrength from '../../components/password-strength';

const Register = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();

  const formik = useFormik({
     initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false, 
     },
     validationSchema: signupSchema,
     onSubmit: (values) => {
        dispatch(register(values));
        navigate("/register-success", {
        state: { firstName: values.firstName }
         });
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

  const nameFields = [
    { 
      type: InputTypes.TEXT, 
      fieldLabel: "First Name", 
      placeholder: "John",
       ...connectField("firstName") 
      },
    { 
      type: InputTypes.TEXT, 
      fieldLabel: "Last Name",
       placeholder: "Doe", 
       ...connectField("lastName") 
      }
  ];

  const emailField = { 
    type: InputTypes.EMAIL,
     fieldLabel: "Email Address",
      placeholder: "you@example.com",
       icon: "envelope",
        ...connectField("email")
       };
  const passwordField = {
     type: InputTypes.PASSWORD,
      fieldLabel: "Password",
       placeholder: "Min. 6 characters",
        icon: "lock",
         ...connectField("password")
         };
  const confirmPasswordField = {
     type: InputTypes.PASSWORD,
      fieldLabel: "Confirm Password",
       placeholder: "Repeat your password",
        icon: "lock",
         ...connectField("confirmPassword")
         };

  return (
    <RegisterStyles>
      <div className="register-root-override">
        <div className="custom-app-container">
          <div className="register-wrapper">
            
            <div className="register-card">
              <h2>Create Account</h2>
              <span className="sub-title">Join DKUST today - it's free</span>
              
              <form onSubmit={formik.handleSubmit} noValidate>
                
                <div className="name-row">
                  {nameFields.map((item) => (
                    <div key={item.name} className="name-field-col">
                      <InputProvider itemObject={item} />
                    </div>
                  ))}
                </div>

                <div className="form-field-spacing">
                  <InputProvider itemObject={emailField} />
                </div>

                <div className="form-field-spacing">
                  <InputProvider itemObject={passwordField} />
                </div>


                <div className="form-field-spacing">
                  <InputProvider itemObject={confirmPasswordField} />
                </div>
               {/* *********************PasswordStrength************ */}
               <PasswordStrength password={formik.values.password} />
                <div className="remember-row">
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id="agreeTerms" 
                      name="agreeTerms"
                      checked={formik.values.agreeTerms} 
                      onChange={(e) => formik.setFieldValue("agreeTerms", e.target.checked)}
                      onBlur={() => formik.setFieldTouched("agreeTerms", true)}
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <span className="highlight-link">Terms of Service</span> and <span className="highlight-link">Privacy Policy</span>
                    </label>
                  </div>
                  {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                    <span className="checkbox-error">{formik.errors.agreeTerms}</span>
                  )}
                </div>

                <CustomButton text="CREATE ACCOUNT" type="submit" />
              </form>

              <div className="divider">
                <span>or sign up with</span>
              </div>

              <div className="social-login-wrapper">
                <CustomButton text="Google" className="social-btn" onClick={() => console.log("Google Sign Up")} />
                <CustomButton text="Facebook" className="social-btn" icon="facebook" onClick={() => console.log("Facebook Sign Up")} />
              </div>

              <p className="signup-text">
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>

            <Link to="/" className="back-home">
              Back to Home
            </Link>

          </div>
        </div>
      </div>
    </RegisterStyles>
  );
};

export default Register;
