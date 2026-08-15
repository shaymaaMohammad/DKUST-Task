import styled from 'styled-components';

export const ButtonContainer = styled.div`

  width: ${props => props.size === 'sm' ? 'auto' : '100%'};

  .custom-btn {
    /* Control width, height, and padding based on size*/
    width: ${props => props.size === 'sm' ? 'auto' : '100%'};
    height: ${props => props.size === 'sm' ? '34px' : '44px'};
    padding: ${props => props.size === 'sm' ? '0 16px' : '0.5rem'};
    font-size: ${props => props.size === 'sm' ? '0.8rem' : '0.9rem'};
    
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    /* Color control based on the variant */
    background-color: ${props => 
      props.variant === 'outline' ? '#ffffff' : 'var(--color-green, #2ec4b6)'};
    color: ${props => 
      props.variant === 'outline' ? '#1a253c' : 'var(--color-white, #ffffff)'};
    border: ${props => 
      props.variant === 'outline' ? '1px solid #eaeaea' : 'none'};

    &:hover {
      background-color: ${props => 
        props.variant === 'outline' ? '#f8f9fa' : 'var(--color-green-hover, #249b8f)'};
      border-color: ${props => props.variant === 'outline' ? '#ccc' : 'none'};
    }
  }

  /* Butttttton Social  */
  .custom-btn.social-btn {
    background-color: var(--color-white) !important; 
    color: var(--color-text-gray) !important; 
    border: 1px solid #e5e5e5 !important; 
    width: 100%;
    height: 44px;
    
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
