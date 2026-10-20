import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterStyles } from "./styles";
import InputProvider from "../../components/common/inputs/input-provider";
import { InputTypes } from "../../constants/enums";
import CustomButton from "../../components/common/custome-button";
import { useFormik } from "formik";
import { signupSchema } from "./schema";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth/authSlice";
import PasswordStrength from "../../components/password-strength";
import PathConstants from "../../routes/PathConstants";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: signupSchema(),
    onSubmit: (values) => {
      dispatch(register(values));
      navigate(PathConstants.REGISTERSUCCESS, {
        state: { firstName: values.firstName },
      });
    },
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
      fieldLabel: t("register_first_name_label"),
      placeholder: t("register_first_name_placeholder"),
      ...connectField("firstName"),
    },
    {
      type: InputTypes.TEXT,
      fieldLabel: t("register_last_name_label"),
      placeholder: t("register_last_name_placeholder"),
      ...connectField("lastName"),
    },
  ];

  const emailField = {
    type: InputTypes.EMAIL,
    fieldLabel: t("login_email_label"),
    placeholder: t("login_email_placeholder"),
    icon: "envelope",
    ...connectField("email"),
  };

  const passwordField = {
    type: InputTypes.PASSWORD,
    fieldLabel: t("login_password_label"),
    placeholder: t("register_password_placeholder"),
    icon: "lock",
    ...connectField("password"),
  };

  const confirmPasswordField = {
    type: InputTypes.PASSWORD,
    fieldLabel: t("register_confirm_password_label"),
    placeholder: t("register_confirm_password_placeholder"),
    icon: "lock",
    ...connectField("confirmPassword"),
  };

  return (
    <AppTemplate pageTitle="Register">
      <RegisterStyles>
        <div className="register-root-override">
          <div className="custom-app-container">
            <div className="register-wrapper">
              <div className="register-card">
                <h2>{t("register_title")}</h2>
                <span className="sub-title">{t("register_subtitle")}</span>

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

                  {/* PasswordStrength */}
                  <PasswordStrength password={formik.values.password} />

                  <div className="remember-row">
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formik.values.agreeTerms}
                        onChange={(e) =>
                          formik.setFieldValue("agreeTerms", e.target.checked)
                        }
                        onBlur={() =>
                          formik.setFieldTouched("agreeTerms", true)
                        }
                      />
                      <label htmlFor="agreeTerms">
                        {t("register_agree_text")}{" "}
                        <span className="highlight-link">
                          {t("register_terms_link")}
                        </span>{" "}
                        {t("register_and_text")}{" "}
                        <span className="highlight-link">
                          {t("register_privacy_link")}
                        </span>
                      </label>
                    </div>
                    {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                      <span className="checkbox-error">
                        {formik.errors.agreeTerms}
                      </span>
                    )}
                  </div>

                  <CustomButton text={t("register_btn_submit")} type="submit" />
                </form>

                <div className="divider">
                  <span>{t("register_divider")}</span>
                </div>

                <div className="social-login-wrapper">
                  <CustomButton
                    text={t("login_btn_google")}
                    className="social-btn"
                    onClick={() => console.log("Google Sign Up")}
                  />
                  <CustomButton
                    text={t("login_btn_facebook")}
                    className="social-btn"
                    icon="facebook"
                    onClick={() => console.log("Facebook Sign Up")}
                  />
                </div>

                <p className="signup-text">
                  {t("register_already_have_account")}{" "}
                  <Link to={PathConstants.LOGIN}>{t("login_btn_signin")}</Link>
                </p>
              </div>

              <Link to={PathConstants.HOME} className="back-home">
                {t("login_back_home")}
              </Link>
            </div>
          </div>
        </div>
      </RegisterStyles>
    </AppTemplate>
  );
};

export default Register;
