import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .site-header {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100% !important;
    z-index: 10000;
    background-color: var(--color-navy-dark);
    color: var(--color-white);
    padding: 1.3rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    border-bottom: none !important;
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
    cursor: pointer;
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
      color: var(--color-white);
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
    gap: 16px;
    margin-left: 2rem;
    align-items: center;
  }
  .header-icons-group {
    display: flex;
    align-items: center;
    gap: 14px;

    .header-icon-btn {
      color: #d1d5dc;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        color 0.2s,
        transform 0.2s;
      text-decoration: none;

      &:hover {
        color: var(--color-green-hover);
        transform: translateY(-1px);
      }
    }
  }

  .lang-switcher-container {
    position: relative;
    display: inline-block;

    &:hover .sub-lang-menu {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    .sub-lang-menu {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background-color: var(--color-navy-dark);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      padding: 6px;
      list-style: none;
      margin: 4px 0 0 0;
      min-width: 90px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 1010;

      visibility: hidden;
      opacity: 0;
      transition: all 0.2s ease-in-out;

      .lang-item button {
        background: transparent;
        border: none;
        color: #d1d5dc;
        width: 100%;
        padding: 6px 12px;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          background-color: var(--color-green);
          color: var(--color-white);
        }
      }
    }
  }

  .btn-theme-toggle {
    background: transparent;
    border: 1px solid var(--color-green);
    color: var(--color-green);
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    padding: 5px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      transform 0.2s ease,
      background-color 0.2s;

    &:hover {
      transform: scale(1.08);
      background-color: rgba(76, 175, 80, 0.08);
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

  .btn-register-solid {
    background-color: var(--color-green);
    color: var(--color-white) !important;
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
      background-color: var(--color-green-hover);
      border-color: var(--color-green-hover);
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
      gap: 10px;
    }
    .btn-login-outline,
    .btn-register-solid {
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
    .btn-login-outline,
    .btn-register-solid {
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

      .header-icons-group {
        justify-content: center;
        padding: 8px 0;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .lang-switcher-container {
        width: 100%;
        button {
          width: 100%;
        }
        .sub-lang-menu {
          position: static;
          transform: none;
          width: 100%;
          box-shadow: none;
          background-color: rgba(0, 0, 0, 0.1);
          margin-top: 5px;
          visibility: visible;
          opacity: 1;
        }
      }

      .btn-theme-toggle {
        padding: 8px 0;
        display: flex;
        width: 100%;
        border-radius: 6px;
        &:hover {
          background-color: var(--color-green-hover);
          color: white;
          transform: scale(1);
        }
      }
    }

    .btn-login-outline,
    .btn-register-solid {
      width: 100%;
      text-align: center;
      padding: 0.7rem 0.8rem;
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
  }
`;
