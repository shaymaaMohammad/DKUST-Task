import styled from "styled-components";

export const FooterWrapper = styled.div`
  .site-footer {
    background-color: var(--color-white);
    border-top: 1px solid var(--color-gray-bg);
    padding-top: 3rem; 
    padding-bottom: 1rem; 
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .footer-columns {
    display: flex;
    flex-wrap: wrap; 
    gap: 2rem;
    justify-content: space-between;
  }

  .footer-col {
    flex: 1;
    min-width: 50px; 
    }
   
  .footer-col-title {
    font-size: 0.95rem; 
    font-weight: 700;
    color: #1a202c; 
    letter-spacing: 0.5px;
    margin-bottom: 1.25rem;
  }
  
  
  .footer-text-muted {
    color: #718096;
    font-size: 0.85rem; 
    line-height: 1.6;
  }
 .text-spacing {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .text-item {
    margin-bottom: 0.25rem;
  }
  
  .footer-links {
    padding: 0;
    margin-top: 1rem;
    list-style: none;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #718096;
      font-size: 0.85rem; 
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: #1a202c;
        padding-left: 3px; 
      }
    }
  }

  
  .newsletter-form-group {
    display: flex;
    margin-top: 1rem;
    border-radius: 0.375rem; 
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); 
    overflow: hidden;
    border: 1px solid #e4e4e4;
  }

  .footer-form-control {
    flex: 1;
    border: none;
    padding: 0.5rem 0.75rem;
    outline: none;
    font-size: 0.85rem;
  }

  .btn-green-submit {
    background-color: var(--color-green);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #3d8b40;
    }
  }

  .footer-bottom-container {
    border-top: 1px solid var(--color-gray-bg);
    margin-top: 2rem;
    padding-top: 1rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-copyright {
    margin: 0;
    color: var(--color-text-gray);
    font-size: 0.85rem;
  }

  .footer-social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem; 

    a {
      width: 32px;
      height: 32px;
      background-color: var(--color-gray-bg);
      color: var(--color-text-gray);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        background-color: var(--color-navy-dark);
        color: var(--color-white);
      }
    }
  }
`;
