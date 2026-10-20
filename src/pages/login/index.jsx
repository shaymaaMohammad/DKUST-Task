import React from "react";
import { LoginStyles } from "./styles";
import InputComponent from "../../components/common/inputs/input-component";
import CustomButton from "../../components/common/custome-button";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice";
import LoginSuccess from "../../components/success-card";
import { Link, useNavigate } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
      navigate(PathConstants.LOGINSUCCESS);
    },
  });

  if (isAuthenticated) {
    return (
      <LoginSuccess
        heading={t("login_success_heading")}
        message={t("login_success_message")}
        buttonText={t("login_success_btn")}
        buttonPath={PathConstants.HOME}
      />
    );
  }

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
    ...connectField("email"),
  };

  const passwordField = {
    fieldLabel: "",
    placeholder: "Enter your password",
    type: "password",
    icon: "lock",
    ...connectField("password"),
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password clicked");
  };

  return (
    <AppTemplate pageTitle="Login">
      <LoginStyles>
        <div className="container">
          <div className="login-wrapper">
            <div className="login-card">
              <h2>{t("login_welcome")}</h2>
              <p className="login-subtitle">{t("login_subtitle")}</p>

              <form id="loginForm" onSubmit={formik.handleSubmit} noValidate>
                <div className="form-field-spacing">
                  <InputComponent itemObject={emailField} />
                </div>

                <div className="form-field-spacing">
                  <div className="password-wrapper-box">
                    <div className="password-row">
                      <label htmlFor="password">Password</label>
                      <a
                        href="#!"
                        id="forgotPassword"
                        onClick={handleForgotPassword}
                      >
                        {t("login_forgot_password")}
                      </a>
                    </div>

                    <InputComponent itemObject={passwordField}></InputComponent>
                  </div>
                </div>

                <div className="remember-row">
                  <input
                    type="checkbox"
                    id="remember"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={(e) =>
                      formik.setFieldValue("rememberMe", e.target.checked)
                    }
                  />
                  <label htmlFor="remember">{t("login_remember_me")}</label>
                </div>

                <CustomButton text={t("login_btn_signin")} type="submit" />
              </form>

              <div className="divider">
                <span>{t("login_divider")}</span>
              </div>

              <div className="social-login-wrapper">
                <CustomButton
                  text={t("login_btn_google")}
                  className="social-btn"
                  onClick={() => console.log("Sign in with Google")}
                />
                <CustomButton
                  text={t("login_btn_facebook")}
                  className="social-btn"
                  icon="facebook"
                  onClick={() => console.log("Sign in with Facebook")}
                />
              </div>

              <p className="signup-text">
                {t("login_dont_have_account")}{" "}
                <Link to="/register">{t("login_link_signup")}</Link>
              </p>
            </div>

            <Link to={PathConstants.HOME} className="back-home">
              {t("login_back_home")}
            </Link>
          </div>
        </div>
      </LoginStyles>
    </AppTemplate>
  );
};

export default Login;
