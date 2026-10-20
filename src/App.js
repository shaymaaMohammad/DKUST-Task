import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppProvider } from "./context/AppProviders";
import { Provider } from "react-redux";
import { store } from "./store";
import routes from "./routes";
import Layout from "./components/layout";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || "en";
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>page not found</h1>,
      children: routes,
    },
  ]);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <div className="app-container">
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </div>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
