import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../header";
import Footer from "../footer";

const AppTemplate = ({ pageTitle, navbar = true, footer = true, children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const title = pageTitle ? `${t(pageTitle)} | ${t("DKUST")}` : t("App Name");
    document.title = title;
  }, [pageTitle, t]);

  return (
    <div className="app-shell" style={{ width: "100%", overflowX: "hidden" }}>
      {navbar && (
        <header className="app-header">
          <div className="container app-header-inner">
            <Header />
          </div>
        </header>
      )}

      <main className="app-main" style={{ width: "100%" }}>
        {children}
      </main>

      {footer && (
        <footer className="app-footer">
          <div className="container footer-inner">
            <Footer />
          </div>
        </footer>
      )}
    </div>
  );
};

export default AppTemplate;
