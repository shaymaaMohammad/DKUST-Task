import styled from 'styled-components';

export const InputStyles = styled.div`
  .form-group {
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;

    label {
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--color-text);
    }

    
    .error-message {
      color: #dc3545;
      font-size: 0.8rem; 
      margin-top: 5px;
      display: block;
      text-align: left; 
    }
  }

  .input-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem; 
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
      background-color: var(--color-white);

      &:focus {
        border-color: var(--color-green);
      }

     
      &.input-error {
        border-color: #dc3545;
      }
    }

    i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%); 
      color: #a0aec0;
      pointer-events: none; 
      z-index: 5;
    }

    & > i:first-of-type {
      left: 1rem;
    }

    .bi-eye {
      right: 1rem;
      cursor: pointer;
      left: auto; 
    }
  }
`;
