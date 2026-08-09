import React from 'react';
import {HeaderWrapper} from "./styles.js"; 
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <HeaderWrapper>
      <header className="site-header">
        <div className="header-container">
          <div className="header-inner">
            <div className="logo">DKUST</div>
            
            <nav className="nav-list">
              <div className="nav-item"><a href="#!">HOME</a></div>
              <div className="nav-item"><a href="#!">ABOUT</a></div>
              <div className="nav-item"><a href="#!">PORTFOLIO</a></div>
              <div className="nav-item"><a href="#!">SERVICES</a></div>
              <div className="nav-item"><a href="#!">BLOG</a></div>
              <div className="nav-item"><a href="#!">RESOURCES</a></div>
              <div className="nav-item"><a href="#!">QUIZ</a></div>
              <div className="nav-item"><a href="#!">CONTACT</a></div>
            </nav>
            
            {/* buttons login and register */}
            <div className="nav-login-wrapper" >
              <Link to="/login" className="btn-login-outline">
                LOGIN
              </Link>
              <Link to="/register" className="btn-login-outline" >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
