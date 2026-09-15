import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  
  .site-header {
    position: relative;
    z-index: 1000;

    background-color: var(--color-navy-dark);
    color: var(--color-white);

    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    padding: 1rem 0;
  }

  .header-container {
    max-width: 1200px;

    margin: 0 auto;

    padding: 0 15px;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo {
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--color-white);
  }

  .mobile-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-item a {
    color: #d1d5dc;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-item a:hover {
    color: var(--color-white);
  }

  .normal-link {
    color: #d1d5dc;

    text-decoration: none;

    font-weight: 500;

    transition: color 0.2s ease;

    &:hover {
      color:var(--color-white);
    }
  }

  .active-link {
    color: var(--color-green-active) !important;

    text-decoration: none;

    font-weight: bold;

    position: relative;
  }

    .nav-login-wrapper {
    display: flex;
    gap: 12px;
    margin-left: 2rem;
    align-items: center; 
  }

  .btn-theme-toggle {
    background: transparent;
    border: 1px solid #0db13d;
    border-radius:30%;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15); 
    }
  }

  .btn-login-outline {
    background-color: transparent;

    color: var(--color-green) !important;

    border: 1px solid var(--color-green);

    padding: 0.4rem 1.2rem;

    border-radius: 6px;

    font-size: 0.75rem;
    font-weight: 700;

    text-decoration: none;

    letter-spacing: 0.5px;

    white-space: nowrap;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-green-hover) !important;

      color: var(--color-white) !important;

      box-shadow: 0 0 10px rgba(13, 177, 61, 0.4);
    }
  }

  .menu-toggle {
    display: none;

    width: 38px;
    height: 38px;

    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, 0.2);

    border-radius: 6px;

    background: transparent;

    color: var(--color-white);

    font-size: 20px;

    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .nav-list {
      gap: 1rem;
    }

    .nav-login-wrapper {
      margin-left: 1rem;
      gap: 8px;
    }

    .btn-login-outline {
      padding: 0.4rem 0.9rem;
    }
  }

  @media (max-width: 1024px) {
    .site-header {
      padding: 0.85rem 0;
    }

    .nav-list {
      gap: 0.75rem;
    }

    .nav-item a {
      font-size: 0.68rem;
    }

    .btn-login-outline {
      font-size: 0.68rem;
      padding: 0.4rem 0.75rem;
    }
  }

  @media (max-width: 900px) {
    .header-inner {
      position: relative;
    }

    .menu-toggle {
      display: flex;
    }

    .mobile-menu {
      position: absolute;

      top: calc(100% + 14px);
      left: 0;
      right: 0;

      display: none;

      flex-direction: column;

      align-items: stretch;

      padding: 18px;

      background-color: var(--color-navy-dark);

      border: 1px solid rgba(255, 255, 255, 0.08);

      border-radius: 8px;

      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }

    .mobile-menu.open {
      display: flex;
    }

    .nav-list {
      width: 100%;

      flex-direction: column;

      align-items: stretch;

      gap: 0;
    }

    .nav-item {
      width: 100%;

      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .nav-item a {
      display: block;

      width: 100%;

      padding: 12px 5px;

      font-size: var(--font-size);
    }

    .nav-login-wrapper {
      width: 100%;
      margin: 18px 0 0;
      justify-content: stretch;
      flex-direction: column; 
      gap: 12px;
    

    .btn-theme-toggle {
     
      padding: 8px 0; 
      display: block;
      width: 100%;
       border-radius: 6px;
        &:hover {
      background-color:var(--color-green-hover); 
    
      transform: scale(1); 
    }
    }
    
    }
  

    .btn-login-outline {
      flex: 1;

      text-align: center;

      padding: 0.7rem 0.8rem;
    }
  }
  }

  @media (max-width: 480px) {
    .site-header {
      padding: 0.75rem 0;
    }

    .header-container {
      padding: 0 12px;
    }

    .logo {
      font-size: 1.3rem;
    }

    .mobile-menu {
      top: calc(100% + 10px);

      padding: 14px;
    }

    .nav-item a {
      padding: 11px 4px;

      font-size: 0.75rem;
    }

    .nav-login-wrapper {
      flex-direction: column;

      gap: 10px;

      margin-top: 14px;
    }

    .btn-login-outline {
      width: 100%;
    }
  }
`;