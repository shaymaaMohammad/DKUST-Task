
import {HeaderWrapper} from "./styles.js"; 
import { Link, useNavigate } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
 import { useTheme } from "../../context/theme/useTheme.js";
 import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 const { theme, toggleTheme } = useTheme();
// ************************Rudex Auth********************
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

                 <button 
                  onClick={toggleTheme} 
                  className="btn-theme-toggle"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              
                {isAuthenticated ? (
  <button
    className="btn-login-outline"
    onClick={() => {
      dispatch(logout());
      closeMenu();
      navigate("/login");
    }}
  >
    LOGOUT
  </button>
) : (
  <Link
    to="/login"
    className="btn-login-outline"
    onClick={closeMenu}
  >
    LOGIN
  </Link>
)}

               {!isAuthenticated && (
  <Link
    to="/register"
    className="btn-login-outline"
    onClick={closeMenu}
  >
    REGISTER
  </Link>
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