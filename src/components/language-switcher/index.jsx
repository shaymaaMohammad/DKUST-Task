import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { languages } from "../../assets/locals";
import environment from "../../environment";
import CustomButton from "../common/custome-button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  const switchLanguage = (langKey) => {
    Cookies.set(environment.localLang, langKey);
    localStorage.setItem(environment.lang, langKey);
    i18n.changeLanguage(langKey);
    navigate(0);
  };

  return (
    <div className="lang-switcher-container">
      <CustomButton
        text={currentLang === "ar" ? "العربية" : "EN"}
        variant="outline"
        size="sm"
      />

      <ul className="sub-lang-menu">
        {languages.map(
          (lang) =>
            lang.key !== currentLang && (
              <li key={lang.key} className="lang-item">
                <button type="button" onClick={() => switchLanguage(lang.key)}>
                  {lang.label}
                </button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
