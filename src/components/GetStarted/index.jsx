import React from "react";
import { useTranslation } from "react-i18next";
import GetStartedContainer from "./styles";

const GetStarted = () => {
  const { t } = useTranslation();

  return (
    <GetStartedContainer>
      <h2>{t("get_started.title")}</h2>
      <p>{t("get_started.description")}</p>

      <div className="btn-group">
        <button className="primary-btn">{t("get_started.btn_create")}</button>
        <button className="secondary-btn">{t("get_started.btn_signin")}</button>
      </div>
    </GetStartedContainer>
  );
};

export default GetStarted;
