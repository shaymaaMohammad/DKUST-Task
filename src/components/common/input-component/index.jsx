import React from 'react';
import { InputStyles } from './styles'; 

const InputComponent = ({ 
  fieldLabel, 
  fieldValue, 
  onChangeFunction, 
  placeholder, 
  type,
  icon,     
  children 
}) => {
  return (
    <InputStyles>
      <div className="form-group">
        <label>{fieldLabel}</label>
        <div className="input-box">
          {/* Render input icon if passed */}
          {icon && <i className={`bi bi-${icon}`}></i>}
          
          <input 
            type={type}
            placeholder={placeholder}
            value={fieldValue}
            onChange={onChangeFunction}
            required
          />
          
          {/* Render children like password eye icon */}
          {children}
        </div>
      </div>
    </InputStyles>
  );
};

export default InputComponent;
