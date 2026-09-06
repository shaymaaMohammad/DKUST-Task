import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterStyles } from './styles'; 
import InputProvider from '../../components/common/inputs/input-provider';
import { InputTypes } from '../../constants/enums';
import CustomButton from '../../components/common/custome-button';
import { useFormik } from 'formik';
import { signupSchema } from './schema';

const Register = () => {
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
       console.log(values); 
     }
  });

  const getPasswordStrength = (password) => {
    if (!password) return { level: 0, text: "", status: "" };
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password) || /[0-9]/.test(password)) score++;
    if (/[@$!%*?&]/.test(password) && password.length >= 8) score++;

    if (score === 1) return { level: 1, text: "Weak", status: "weak" };
    if (score === 2) return { level: 2, text: "Medium", status: "medium" };
    if (score === 3) return { level: 3, text: "Strong", status: "strong" };
    return { level: 1, text: "Weak", status: "weak" };
  };

  const strength = getPasswordStrength(formik.values.password);

  // دالة الربط الذكي التي تمرر كلاس الخطأ الخاص بالخلفية الحمراء
  const connectField = (name) => {
    const hasError = formik.touched[name] && formik.errors[name];
    return {
      name, 
      fieldValue: formik.values[name],
      onChangeFunction: (value) => formik.setFieldValue(name, value),
      onBlurFunction: () => formik.setFieldTouched(name, true),
      errorMessage: hasError ? formik.errors[name] : null,
      // تمرير كلاس إضافي للمكون لكي يتلون بالخلفية الحمراء عند الخطأ
      className: hasError ? "input-field-error" : "",
    };
  };

  const nameFields = [
    { type: InputTypes.TEXT, fieldLabel: "First Name", placeholder: "John", ...connectField("firstName") },
    { type: InputTypes.TEXT, fieldLabel: "Last Name", placeholder: "Doe", ...connectField("lastName") }
  ];

  const emailField = { type: InputTypes.EMAIL, fieldLabel: "Email Address", placeholder: "you@example.com", icon: "envelope", ...connectField("email") };
  const passwordField = { type: InputTypes.PASSWORD, fieldLabel: "Password", placeholder: "Min. 6 characters", icon: "lock", ...connectField("password") };
  const confirmPasswordField = { type: InputTypes.PASSWORD, fieldLabel: "Confirm Password", placeholder: "Repeat your password", icon: "lock", ...connectField("confirmPassword") };

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

                {formik.values.password && (
                  <div className="password-strength-wrapper">
                    <div className="strength-bar-container">
                      <div className={`strength-segment ${strength.level >= 1 ? strength.status : ''}`}></div>
                      <div className={`strength-segment ${strength.level >= 1 ? strength.status : ''}`}></div>
                      <div className={`strength-segment ${strength.level >= 2 ? strength.status : ''}`}></div>
                      <div className={`strength-segment ${strength.level >= 3 ? strength.status : ''}`}></div>
                    </div>
                    <span className="strength-text" style={{ color: strength.status === 'weak' ? '#ef4444' : strength.status === 'medium' ? '#f59e0b' : '#00ac47' }}>
                      {strength.text}
                    </span>
                  </div>
                )}

                <div className="form-field-spacing">
                  <InputProvider itemObject={confirmPasswordField} />
                </div>

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
