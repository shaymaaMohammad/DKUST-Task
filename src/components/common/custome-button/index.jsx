import React from 'react';
import { ButtonStyles } from './styles'; 
import { FcGoogle } from 'react-icons/fc'; 

const CustomButton = ({ text, type = "button", className = "custom-btn", onClick, icon, imgSrc }) => {
  return (
    <ButtonStyles>
      {/* social-btn */}
      <button type={type} className={`custom-btn ${className}`} onClick={onClick}>
        
        {/* icon google */}
        {text === "Google" ? (
          <FcGoogle size={18} style={{ marginRight: '8px' }} />
        ) : (
        
          imgSrc && <img className="google-icon" src={imgSrc} alt={text} />
        )}
        
        {/*  icon bootstrap facebook and send */}
        {icon && <i className={`bi bi-${icon}`}></i>}
        
        {text}
      </button>
    </ButtonStyles>
  );
};

export default CustomButton;
