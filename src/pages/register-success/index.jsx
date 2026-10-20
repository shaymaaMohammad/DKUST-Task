import React from "react";
import { useLocation } from "react-router-dom";
import SuccessCard from "../../components/success-card";
import { useTranslation } from "react-i18next";
import AppTemplate from "../../components/app-template";

const RegisterSuccess = () => {
  const location = useLocation();
  const firstName = location.state?.firstName || "";
  const { t } = useTranslation();

  return (
    <AppTemplate pageTitle="register-success">
      <SuccessCard
        heading={t("register_success_heading")}
        message={t("register_success_message", { name: firstName })}
        buttonText={t("register_success_btn_login")}
        buttonPath="/login"
      />
    </AppTemplate>
  );
};

export default RegisterSuccess;
