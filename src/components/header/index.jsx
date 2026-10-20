import { HeaderWrapper } from "./styles.js";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "../../context/theme/useTheme.js";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import PathConstants from "../../routes/PathConstants.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher/index.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <header className="site-header">
        <div className="header-container">
          <div className="header-inner">
            <div className="logo" onClick={() => navigate(PathConstants.HOME)}>
              DKUST
            </div>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <nav className="nav-list">
                <div className="nav-item">
                  <NavLink
                    to={PathConstants.HOME}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    {t("nav_home")}
                  </NavLink>
                </div>
                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>
                    {t("nav_about")}
                  </a>
                </div>
                {/* <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>
                    {t("nav_portfolio")}
                  </a>
                </div> */}
                <div className="nav-item">
                  <NavLink
                    to={PathConstants.PRODUCTS}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    {t("nav_products")}
                  </NavLink>
                </div>
                <div className="nav-item">
                  <NavLink
                    to={PathConstants.SERVICES}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    {t("nav_services")}
                  </NavLink>
                </div>
                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>
                    {t("nav_blog")}
                  </a>
                </div>
                {/* <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>
                    {t("nav_resources")}
                  </a>
                </div> */}
                <div className="nav-item">
                  <NavLink
                    to={PathConstants.QUIZ}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    {t("nav_quiz")}
                  </NavLink>
                </div>
                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>
                    {t("nav_contact")}
                  </a>
                </div>
              </nav>

              <div className="nav-login-wrapper">
                <div className="header-icons-group">
                  <Link
                    to="/wishlist"
                    className="header-icon-btn"
                    onClick={closeMenu}
                    aria-label="Wishlist"
                  >
                    <i className="bi bi-heart"></i>
                  </Link>
                  <Link
                    to="/cart"
                    className="header-icon-btn"
                    onClick={closeMenu}
                    aria-label="Cart"
                  >
                    <i className="bi bi-bag"></i>
                  </Link>
                  <Link
                    to="/profile"
                    className="header-icon-btn"
                    onClick={closeMenu}
                    aria-label="Profile"
                  >
                    <i className="bi bi-person"></i>
                  </Link>
                </div>

                <button onClick={toggleTheme} className="btn-theme-toggle">
                  {theme === "light" ? (
                    <i className="bi bi-moon-fill"></i>
                  ) : (
                    <i className="bi bi-sun-fill"></i>
                  )}
                </button>

                <LanguageSwitcher />

                {isAuthenticated ? (
                  <button
                    className="btn-login-outline"
                    onClick={() => {
                      dispatch(logout());
                      closeMenu();
                      navigate(PathConstants.LOGIN);
                    }}
                  >
                    {t("btn_logout")}
                  </button>
                ) : (
                  <>
                    <Link
                      to={PathConstants.LOGIN}
                      className="btn-login-outline"
                      onClick={closeMenu}
                    >
                      {t("btn_login")}
                    </Link>
                    <Link
                      to={PathConstants.REGISTER}
                      className="btn-register-solid"
                      onClick={closeMenu}
                    >
                      {t("btn_register")}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
