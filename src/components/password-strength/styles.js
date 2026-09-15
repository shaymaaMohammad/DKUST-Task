import styled from "styled-components";

 const Styles = styled.div`
.password-strength-wrapper {
    margin-top: -12px;
    margin-bottom: 14px;
    text-align: left;
    width: 100%;

    .strength-bar-container {
      display: flex;
      gap: 5px;
      margin-bottom: 4px;
      width: 100%;
    }

    .strength-segment {
      height: 4px;
      flex: 1;
      background-color:var(--color-gray-bg); 
      border-radius: 2px;
      transition: background-color 0.3s ease;
    }

    .strength-segment.weak {
         background-color: #ef4444; 
        }   
    .strength-segment.medium { 
        background-color: #f59e0b; 
    } 
    .strength-segment.strong {
         background-color: #00ac47; 
        } 

    .strength-text {
      font-size: var(--font-size);
      font-weight: 600;
      display: block;
    }
     @media (max-width: 480px) {
      margin-top: -10px;
      margin-bottom: 14px;

      .strength-bar-container {
        gap: 4px;
      }

      .strength-text {
        font-size: 0.7rem;
      }
    }
  }`;
  export default Styles;
  