import React from "react";
import Styles from "./styles";

const PasswordStrength = ({ password }) => {
  const getPasswordStrength = (password) => {
    if (!password) return { level: 0, text: "", status: "" };

    let score = 0;

    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password) || /[0-9]/.test(password)) score++;
    if (/[@$!%*?&]/.test(password) && password.length >= 8) score++;

    if (score === 1)
      return {
        level: 1,
        text: "Weak",
        status: "weak"
      };

    if (score === 2)
      return {
        level: 2,
        text: "Medium",
        status: "medium"
      };

    if (score === 3)
      return {
        level: 3,
        text: "Strong",
        status: "strong"
      };

    return {
      level: 1,
      text: "Weak",
      status: "weak"
    };
  };

  const strength = getPasswordStrength(password);

  if (!password) return null;

  return (
    <Styles>
      <div className="password-strength-wrapper">
        <div className="strength-bar-container">
          <div className={`strength-segment ${strength.level >= 1 ? strength.status : ""}`}></div>
          <div className={`strength-segment ${strength.level >= 1 ? strength.status : ""}`}></div>
          <div className={`strength-segment ${strength.level >= 2 ? strength.status : ""}`}></div>
          <div className={`strength-segment ${strength.level >= 3 ? strength.status : ""}`}></div>
        </div>

        <span className={`strength-text ${strength.status}`}>
          {strength.text}
        </span>
      </div>
    </Styles>
  );
};

export default PasswordStrength;