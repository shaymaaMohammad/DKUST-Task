import React from "react";
import SuccessCard from "../../components/success-card";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const LoginSuccess = () => {
  const { t } = useTranslation();
  return (
    <AppTemplate pageTitle="Login-success">
      <SuccessCard
        heading={t("login_success_heading")}
        message={t("login_success_message")}
        buttonText={t("login_success_btn")}
        buttonPath="/"
      />
    </AppTemplate>
  );
};

export default LoginSuccess;
