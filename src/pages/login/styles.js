import styled from 'styled-components';

export const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var( --color-navy-hero); 
  padding: 40px 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  
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
    background: #ffffff !important;
    border-radius: 16px; 
    padding: 45px 35px; 
    border-top: 5px solid #00ac47; 
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    width: 100%;
    box-sizing: border-box;

    h2 {
      font-size: 1.8rem; 
      font-weight: 700;
      color: #0c1527;
      margin: 0 0 8px 0;
      text-align: center;
      letter-spacing: -0.5px;
    }

    .login-subtitle {
      font-size: 0.88rem;
      color: #64748b;
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
        font-size: 0.85rem;
        font-weight: 600;
        color: #1d2230;
        margin: 0;
      }

      #forgotPassword {
        font-size: 0.82rem;
        color: #00ac47;
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
    background-color: #fef2f2 !important; 
    border-color: #ef4444 !important; 
    color: #991b1b !important;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
    }
  }

 
  span.error, div.input-field-error + span, form span[style*="color"] {
    color: #ef4444 !important;
    font-size: 0.78rem !important;
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
      accent-color: #00ac47;
    }

    label {
      font-size: 0.85rem;
      color: #4a5568;
      cursor: pointer;
      user-select: none;
    }
  }

 
  .divider {
    margin: 24px 0 20px;
    color: #94a3b8;
    font-size: 0.82rem;
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
      background-color: #e2e8f0;
      z-index: 1;
    }

    span {
      background-color: #ffffff;
      padding: 0 12px;
      color: #64748b;
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
      font-size: 0.88rem;
      padding: 10px 16px;
      font-weight: 500;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      color: #334155;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
  }

 
  .signup-text {
    margin: 15px 0 0 0;
    color: #64748b;
    font-size: 0.88rem;
    text-align: center;

    a {
      color: #00ac47;
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
    color: #94a3b8; 
    font-size: 0.92rem;
    text-decoration: underline;
    transition: color 0.2s;
    
    &:hover {
      color: #ffffff;
    }
  }
@media (max-width: 480px) {
  padding: 20px 12px;

  .login-card {
    padding: 30px 20px;
    border-radius: 12px;

    h2 {
      font-size: 1.5rem;
    }

    .login-subtitle {
      font-size: 0.8rem;
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
    font-size: 0.8rem;
  }

  .back-home {
    font-size: 0.85rem;
    margin-top: 20px;
  }
}
`;
