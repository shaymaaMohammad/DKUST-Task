import styled from 'styled-components';

export const LoginStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-navy-hero);
  padding: 20px; 
  position: relative;
  overflow: hidden;

  .login-wrapper {
    text-align: center;
    width: 100%;
    max-width: 480px; 
  }

  .login-card {
    background: var(--color-white);
    border-radius: 22px; 
    padding: 40px 42px; 
    border-top: 7px solid var(--color-green); 
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 115%;
      height: 115%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(255, 255, 255, 0.03);
      border-radius: 28px;
      z-index: -1;
    }

    h2 {
      font-size: 2.2rem; 
      font-weight: 600; 
      color: var(--text-dark);
      margin-top: 0;
      margin-bottom: 24px; /* Unified text gap spacing */
    }
  }

  .login-subtitle {
    color: #777;
    font-size: 1.05rem; 
    margin-bottom: 30px; 
  }

  .password-wrapper-box {
    position: relative;
    width: 100%;
    
  .password-row {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%; 
    margin-bottom: 0.5rem; 
    label {
      font-size: 0.85rem;
      font-weight: 600;
      color: #1d2230;
      margin: 0;
    }

    #forgotPassword {
      font-size: 0.8rem;
      color: var(--color-green);
      text-decoration: none;
      font-weight: 600;
    }
  }
  }

  .remember-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 1.25rem 0; 

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    label {
      font-size: 0.85rem;
      color: #4a5568;
    }
  }

  .divider {
    margin: 24px 0 18px;
    color: #999;
    font-size: .9rem;
  }

  .social-login-wrapper {
    display: flex;
    gap: 12px;
    width: 100%;
  }

  .signup-text {
    margin-top: 24px;
    color: #666;
    font-size: 0.95rem;

    a {
      color: #08b33f;
      font-weight: 600;
      text-decoration: none;
    }
  }

  .back-home {
    display: inline-block;
    margin-top: 28px;
    color: white;
    font-size: 1.05rem;
    text-decoration: underline;
  }
`;
