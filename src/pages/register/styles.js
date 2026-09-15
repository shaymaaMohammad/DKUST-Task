import styled from 'styled-components';

export const RegisterStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  
  .register-root-override {
    background-color:var(--color-navy-hero) !important; 
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 110px 20px 40px;
    box-sizing: border-box;
    overflow-x: hidden;
  }


  .custom-app-container {
    width: 100% !important;
    max-width: 460px !important; 
    margin: 0 auto !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .register-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .register-card {
    background: var(--color-white) !important;
    border-radius: 12px; 
    padding: 40px 35px; 
    border-top: 5px solid #00ac47; 
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    width: 100%;
    box-sizing: border-box;

    h2 {
      font-size: 36px; 
      font-weight: 700;
      color:var(--color-text-dark);
      margin: 0 0 6px 0;
      text-align: center;
      letter-spacing: -0.5px;
    }

    .sub-title {
      font-size: var(--font-size);
      color: var(--color-text-gray);
      margin-bottom: 28px;
      display: block;
      text-align: center;
    }
  }

  .form-field-spacing {
    margin-bottom: 18px;
    width: 100%;
  }

  .name-row {
    display: flex;
    gap: 16px; 
    width: 100%;
    margin-bottom: 18px;
    box-sizing: border-box;

    .name-field-col {
      flex: 1;
      min-width: 0;
    }
  }

 
  .input-field-error, 
  div.input-field-error input, 
  input.input-field-error {
    background-color: var(--color-gray-bg) !important; 
    border-color: #ef4444 !important;
    color: #991b1b !important;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
  }

  
  span.error, .checkbox-error, div.input-field-error + span, form span[style*="color"] {
    color: #ef4444 !important;
    font-size: var(--font-size) !important;
    font-weight: 500;
    margin-top: 5px;
    display: block;
    text-align: left;
  }

  .remember-row {
    display: flex;
    flex-direction: column;
    margin: 18px 0;
    text-align: left;
    width: 100%;

    .checkbox-container {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin-top: 2px;
      cursor: pointer;
      accent-color:var(--color-green);
    }

    label {
      font-size: var(--font-size);
      color: var(--color-text-gray);
      line-height: 1.4;
      cursor: pointer;
      user-select: none;

      span.highlight-link {
        color:var(--color-green);
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .divider {
    margin: 24px 0 18px;
    color: var(--color-text-gray);
    font-size: var(--font-size);
    text-align: center;
    position: relative;
    width: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: var(--color-gray-bg);
      z-index: 1;
    }

    span {
      background-color:var(--color-white);
      padding: 0 12px;
      color: var(--color-text-gray);
      position: relative;
      z-index: 2;
      font-weight: 500;
    }
  }

  .social-login-wrapper {
    display: flex;
    gap: 12px;
    width: 100%;
    margin-bottom: 22px;
    
    button, .btn, .social-btn {
      flex: 1;
      font-size: var(--font-size);
      padding: 10px 16px;
      font-weight: 500;
    }
  }

  .signup-text {
    margin: 15px 0 0 0;
    color:var(--color-text-gray);
    font-size: var(--font-size);
    text-align: center;

    a {
      color:var(--color-green);
      font-weight: 600;
      text-decoration: none;
      margin-left: 4px;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .back-home {
    display: inline-block;
    margin-top: 24px;
    color: var(--color-text-gray);
    font-size: var(--font-size);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    
    &:hover {
      color:var(--color-text-dark);
      text-decoration: underline;
    }
  }


    /* =========================
   TABLET
========================= */

@media (max-width: 768px) {

  .register-root-override {
     padding: 90px 16px 30px;
    align-items: flex-start;
  }

  .custom-app-container {
    max-width: 500px !important;
  }

  .register-card {
    padding: 35px 28px;
  }

  .register-card h2 {
    font-size: 1.7rem;
  }

  .sub-title {
    font-size: 0.85rem !important;
  }

  .name-row {
    gap: 12px;
  }

  .form-field-spacing {
    margin-bottom: 16px;
  }

  .social-login-wrapper {
    gap: 10px;
  }

  .back-home {
    margin-top: 20px;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 480px) {

  .register-root-override {
     padding: 90px 12px 20px;
    align-items: flex-start;
  }

  .custom-app-container {
    width: 100% !important;
    max-width: 100% !important;
  }

  .register-card {
    padding: 28px 18px;
    border-radius: 10px;
  }

  .register-card h2 {
    font-size: 1.5rem;
  }

  .register-card .sub-title {
    font-size: 0.8rem;
    margin-bottom: 22px;
  }


  /* First Name + Last Name */

  .name-row {
    flex-direction: column;

    gap: 0;

    margin-bottom: 0;
  }

  .name-field-col {
    width: 100%;

    margin-bottom: 16px;
  }


  /* Form fields */

  .form-field-spacing {
    margin-bottom: 16px;
  }


  /* Password strength */

  .password-strength-wrapper {
    margin-top: -10px;
    margin-bottom: 14px;

    .strength-bar-container {
      gap: 4px;
    }

    .strength-text {
      font-size: 0.7rem;
    }
  }


  /* Checkbox */

  .remember-row {
    margin: 16px 0;

    .checkbox-container {
      gap: 8px;
    }

    label {
      font-size: 0.78rem;
    }

    input[type="checkbox"] {
      flex-shrink: 0;
    }
  }


  /* Divider */

  .divider {
    margin: 20px 0 16px;

    font-size: 0.75rem;
  }


  /* Social buttons */

  .social-login-wrapper {
    flex-direction: column;

    gap: 10px;

    button,
    .btn,
    .social-btn {
      width: 100%;

      min-height: 42px;
    }
  }


  /* Login link */

  .signup-text {
    font-size: 0.8rem;

    line-height: 1.5;
  }


  /* Back Home */

  .back-home {
    margin-top: 18px;

    font-size: 0.82rem;
  }
}


/* =========================
   
========================= */

@media (max-width: 360px) {

  .register-root-override {
     padding: 80px 8px 12px;
  }

  .register-card {
    padding: 24px 14px;
  }

  .register-card h2 {
    font-size: 1.35rem;
  }

  .register-card .sub-title {
    font-size: 0.75rem;
  }

  .remember-row label {
    font-size: 0.72rem;
  }

  .signup-text {
    font-size: 0.75rem;
  }
}
`;
