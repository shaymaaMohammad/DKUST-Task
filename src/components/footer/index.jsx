import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FooterWrapper } from "./styles.js";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <footer className="site-footer">
        <div className="footer-container footer-columns">
          <div className="footer-col">
            <h3 className="footer-col-title">{t("footer_contact_title")}</h3>
            <p className="footer-text-muted text-spacing">
              123 Business Street,
              <br />
              Suite 100, New York,
              <br />
              NY 10001
            </p>
            <p className="footer-text-muted text-item">
              <strong>{t("footer_phone")}:</strong> +1 234 567 8900
            </p>
            <p className="footer-text-muted">
              <strong>{t("footer_email")}:</strong> shaymaamohammad692@gmail.com
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">{t("footer_quick_links")}</h3>
            <ul className="footer-links">
              <li>
                <a href="#!">{t("nav_about")} </a>
              </li>
              <li>
                <a href="#!">{t("nav_services")}</a>
              </li>
              <li>
                <a href="#!">{t("nav_portfolio")}</a>
              </li>
              <li>
                <a href="#!">{t("nav_services")}</a>
              </li>
              <li>
                <a href="#!">{t("nav_contact")} </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">{t("footer_services_title")}</h3>
            <ul className="footer-links">
              <li>
                <a href="#!">{t("service_web")}</a>
              </li>
              <li>
                <a href="#!">{t("service_ml")}</a>
              </li>
              <li>
                <a href="#!">{t("service_robotics")}</a>
              </li>
              <li>
                <a href="#!">{t("service_consulting")}</a>
              </li>
              <li>
                <a href="#!">{t("service_analytics")}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">{t("footer_newsletter_title")}</h3>
            <p className="footer-text-muted text-spacing">
              {t("footer_newsletter_desc")}
            </p>
            <form
              className="newsletter-form-group newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                id="email-footer"
                className="footer-form-control"
                placeholder={t("footer_placeholder_email")}
                required
              />
              <button className="btn-green-submit" type="submit">
                <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>

        <div className=" container footer-bottom-container footer-bottom">
          <p className="footer-copyright">{t("footer_copyright")}</p>

          <div className="footer-social-icons">
            <a href="#!">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#!">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#!">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#!">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default Footer;
