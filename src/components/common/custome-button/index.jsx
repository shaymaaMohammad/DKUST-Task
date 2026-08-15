import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ButtonContainer } from './styles'; 

const CustomButton = ({ text, type = "button", className = "custom-btn", onClick, icon, imgSrc, variant = "solid", size = "md" }) => {
  return (
    <ButtonContainer variant={variant} size={size}>
      <button type={type} className={`custom-btn ${className}`} onClick={onClick}>
        
        {/* Googelllllll icoooon */}
        {text === "Google" ? (
          <FcGoogle size={18} style={{ marginRight: '8px' }} />
        ) : (
          imgSrc && <img className="google-icon" src={imgSrc} alt={text} />
        )}
        
        {/* Bootstrap icons */}
        {icon && <i className={`bi bi-${icon}`}></i>}
        
        {text}
      </button>
    </ButtonContainer>
  );
};

export default CustomButton;
