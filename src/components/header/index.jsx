
import {HeaderWrapper} from "./styles.js"; 
import { Link } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <header className="site-header">
        <div className="header-container">
          <div className="header-inner">

            <div className="logo">DKUST</div>

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
                    to="/"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    HOME
                  </NavLink>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>ABOUT</a>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>PORTFOLIO</a>
                </div>

                <div className="nav-item">
                  <NavLink
                    to="/products"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    PRODUCTS
                  </NavLink>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>SERVICES</a>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>BLOG</a>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>RESOURCES</a>
                </div>

                <div className="nav-item">
                  <NavLink
                    to="/quiz"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                  >
                    QUIZ
                  </NavLink>
                </div>

                <div className="nav-item">
                  <a href="#!" onClick={closeMenu}>CONTACT</a>
                </div>
              </nav>

              <div className="nav-login-wrapper">
                <Link
                  to="/login"
                  className="btn-login-outline"
                  onClick={closeMenu}
                >
                  LOGIN
                </Link>

                <Link
                  to="/register"
                  className="btn-login-outline"
                  onClick={closeMenu}
                >
                  REGISTER
                </Link>
              </div>
            </div>

          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;