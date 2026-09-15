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
    font-size: var(--font-size); 
    font-weight: 700;
    color:var(--color-text-dark); 
    letter-spacing: 0.5px;
    margin-bottom: 1.25rem;
  }
  
  
  .footer-text-muted {
    color:var(--color-text-gray);
    font-size: var(--font-size); 
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
      color:var(--color-text-gray);
      font-size:var(--font-size); 
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color:var(--color-green-hover);
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
    font-size: var(--font-size);
  }

  .btn-green-submit {
    background-color: var(--color-green);
    color: var(--color-white);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color:var(--color-green-hover);
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
    font-size:  var(--font-size);
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
    @media (max-width: 1024px) {
    .footer-columns {
      gap: 30px;
    }

    .footer-col {
      flex: 0 0 calc(50% - 15px);
      min-width: 0;
    }

    .newsletter-form-group {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .site-footer {
      padding-top: 2.5rem;
    }

    .footer-columns {
      gap: 28px 24px;
    }

    .footer-col-title,
    .newsletter-title {
      margin-bottom: 1rem;
    }

    .footer-bottom-container {
      flex-direction: column;

      gap: 16px;

      text-align: center;
    }

    .footer-social-icons {
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    .site-footer {
      padding-top: 2rem;
    }

    .footer-container {
      padding: 0 16px;
    }

    .footer-columns {
      flex-direction: column;

      gap: 30px;
    }

    .footer-col {
      width: 100%;

      flex: none;
    }

    .footer-col-title,
    .newsletter-title {
      font-size: 0.95rem;
    }

    .footer-text-muted,
    .footer-links a {
      font-size: 0.82rem;
    }

    .newsletter-form-group {
      width: 100%;
    }

    .footer-form-control {
      min-width: 0;

      padding: 0.65rem 0.75rem;
    }

    .btn-green-submit {
      padding: 0.65rem 1rem;
    }

    .footer-bottom-container {
      margin-top: 1.5rem;

      padding-top: 1.25rem;
    }

    .footer-copyright {
      font-size: 0.78rem;
    }

    .footer-social-icons {
      gap: 10px;

      a {
        width: 30px;
        height: 30px;

        font-size: 13px;
      }
    }
  }
`;
