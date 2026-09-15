import styled from 'styled-components';

export const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var( --color-navy-hero); 
 padding: 110px 20px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  font-family:var(--font-primary);

  
  .container {
    width: 100% !important;
    max-width: 440px !important; 
    margin: 0 auto !important;
    padding: 0 !important;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  .login-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

 
  .login-card {
    background:var(--color-white) !important;
    border-radius: 16px; 
    padding: 45px 35px; 
    border-top: 5px solid #00ac47; 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    width: 100%;
    box-sizing: border-box;

    h2 {
      font-size: 1.8rem; 
      font-weight: 700;
      color:var(--color-txet-dark);
      margin: 0 0 8px 0;
      text-align: center;
      letter-spacing: -0.5px;
    }

    .login-subtitle {
      font-size: var(--font-size);
      color:var(--color-text-gray);
      margin-bottom: 32px;
      display: block;
      text-align: center;
    }
  }

  
  .form-field-spacing {
    margin-bottom: 20px;
    width: 100%;
    text-align: left;
  }

 
  .password-wrapper-box {
    position: relative;
    width: 100%;
    
    .password-row {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      width: 100%; 
      margin-bottom: 6px; 

      label {
        font-size:var(--font-size);
        font-weight: 600;
        color: var(--color-txet-dark);
        margin: 0;
      }

      #forgotPassword {
        font-size:var(--font-size);
        color: var(--color-green);
        text-decoration: none;
        font-weight: 600;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

 
  .input-field-error, 
  div.input-field-error input, 
  input.input-field-error {
    background-color:var(--color-gray-bg) !important; 
    border-color: #ef4444 !important; 
    color: #991b1b !important;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
  }

 
  span.error, div.input-field-error + span, form span[style*="color"] {
    color: #ef4444 !important;
    font-size: var(--font-size) !important;
    font-weight: 500;
    margin-top: 6px;
    display: block;
    text-align: left;
  }

 
  .remember-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 20px 0; 
    width: 100%;
    text-align: left;

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
      accent-color: var(--color-green-active);
    }

    label {
      font-size:var(--font-size);
      color:var(--color-text-gray);
      cursor: pointer;
      user-select: none;
    }
  }

 
  .divider {
    margin: 24px 0 20px;
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
      background-color: var(--color-white);
      padding: 0 12px;
      color: var(--color-text-gray);
      position: relative;
      z-index: 2;
      font-weight: 500;
    }
  }

 
  .social-login-wrapper {
    display: flex;
    gap: 14px;
    width: 100%;
    margin-bottom: 24px;
    
    button, .btn, .social-btn {
      flex: 1;
      font-size:var(--font-size);
      padding: 10px 16px;
      font-weight: 500;
      background:var(--color-white);
      border: 1px solid var(--color-gray-bg);
      color:var(--color-text-gray);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
  }

 
  .signup-text {
    margin: 15px 0 0 0;
    color: var(--color-text-gray);
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
    margin-top: 25px;
    color:var(--color-text-gray); 
    font-size: var(--font-size);
    text-decoration: underline;
    transition: color 0.2s;
    
    &:hover {
      color: var(--color-white);
    }
  }
@media (max-width: 480px) {
   padding: 90px 12px 20px;

  .login-card {
    padding: 30px 20px;
    border-radius: 12px;

    h2 {
      font-size: 1.5rem;
    }

    .login-subtitle {
      font-size: 0.7rem;
      margin-bottom: 25px;
    }
  }

  .password-wrapper-box {
    .password-row {
      label,
      #forgotPassword {
        font-size: 0.75rem;
      }
    }
  }

  .social-login-wrapper {
    flex-direction: column;
    gap: 10px;

    button,
    .btn,
    .social-btn {
      width: 100%;
    }
  }

  .signup-text {
    font-size: 0.7rem;
  }

  .back-home {
    font-size: 0.75rem;
    margin-top: 20px;
  }
}
`;
