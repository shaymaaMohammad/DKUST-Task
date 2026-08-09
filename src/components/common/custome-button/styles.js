import styled from 'styled-components';

export const ButtonStyles = styled.div`
  width: 100%;

  .custom-btn {
    width: 100%;
    height: 44px;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--color-green); 
    color: var(--color-white);

    &:hover {
      background-color: var(--color-green-hover);
    }
  }

  /* Social media buttons */
  .custom-btn.social-btn {
    background-color: var(--color-white) !important; 
    color: var(--color-text-gray) !important; 
    border: 1px solid #e5e5e5 !important; 
    
    &:hover {
      background-color: var(--color-gray-bg) !important;
      color: var(--color-text-dark) !important;
    }
  }

  .social-btn .bi-facebook {
    color: #1877F2 !important;
    font-size: 18px;
  }

  .google-icon, .google-svg-icon {
    width: 18px;
    height: 18px;
  }
`;
