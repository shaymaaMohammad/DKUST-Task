import styled from 'styled-components';

export const RegisterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-navy-hero); 
  padding: 20px;
  position: relative;
  overflow: hidden;

  .register-wrapper {
    text-align: center;
    width: 100%;
    max-width: 480px; 
  }

  .register-card {
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
      margin-bottom: 24px;
    }
  }

  .name-row {
    display: flex;
    gap: 1rem;
    width: 100%;

    & > div {
      flex: 1;
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
      cursor: pointer;
    }
  }

  .divider {
    margin: 24px 0 18px;
    color: #999;
    font-size: .9rem;
    text-align: center;
    position: relative;

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
      padding: 0 10px;
      color: #718096;
      position: relative;
      z-index: 2;
    }
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
