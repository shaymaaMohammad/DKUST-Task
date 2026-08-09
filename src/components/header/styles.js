import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  .site-header {
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
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--color-white);
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 0;
    margin-left: auto; 
    padding: 0;
    list-style: none;
  }

  .nav-item a {
    color: #a0aec0;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-item a:hover {
    color: var(--color-white);
  }

  
  .nav-login-wrapper {
    display: flex;
    gap: 12px;
    margin-left: 2rem; 
  }

    .btn-login-outline {
    background-color: transparent; 
    color: #0db13d !important; 
    border: 1px solid #0db13d; 
    padding: 0.4rem 1.2rem; 
    border-radius: 6px; 
    font-size: 0.75rem;
    font-weight: 700; 
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: all 0.3s ease-in-out; 

    &:hover {
      background-color: var(--color-green) !important;
      color: var(--color-white) !important; 
      box-shadow: 0 0 10px rgba(13, 177, 61, 0.4);
    }
  }

`;
