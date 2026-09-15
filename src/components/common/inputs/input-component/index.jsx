import React, { useState } from 'react';
import { InputStyles } from './styles'; 
import { InputTypes } from '../../../../constants/enums';

const InputComponent = ({ itemObject, children }) => {
  const [showPassword, setShowPassword] = useState(false);
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
            type={type === InputTypes.PASSWORD && showPassword ? "text" : type}
            placeholder={placeholder}
            value={fieldValue || ''}
            onChange={(e) => onChangeFunction?.(e.target.value)}
            onBlur={onBlurFunction}
            className={errorMessage ? 'input-error' : ''}
            required
          />
          {type === InputTypes.PASSWORD && (
         <i
           className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
            onClick={() => setShowPassword(!showPassword)}
           ></i>
           )}
         
          {children}
        </div>
        
      
        {errorMessage && <span className="error-message">{errorMessage}</span>}
      </div>
    </InputStyles>
  );
};

export default InputComponent;
