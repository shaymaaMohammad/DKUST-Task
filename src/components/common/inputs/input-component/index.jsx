import React from 'react';
import { InputStyles } from './styles'; 

const InputComponent = ({ itemObject, children }) => {
  
  const { 
    fieldLabel, 
    fieldValue, 
    onChangeFunction, 
    onBlurFunction,
    placeholder, 
    type,
    icon,
    errorMessage
  } = itemObject || {};

  return (
    <InputStyles>
      <div className="form-group">
        <label>{fieldLabel}</label>
        <div className="input-box">
         
          {icon && <i className={`bi bi-${icon}`}></i>}
          
          <input 
            type={type}
            placeholder={placeholder}
            value={fieldValue || ''}
            onChange={(e) => onChangeFunction?.(e.target.value)}
            onBlur={onBlurFunction}
            className={errorMessage ? 'input-error' : ''}
            required
          />
          
         
          {children}
        </div>
        
      
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
    </InputStyles>
  );
};

export default InputComponent;
