import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./styles";

const SuccessCard = ({ heading, message, buttonText, buttonPath }) => {
  const navigate = useNavigate();

  return (
    <Styles>
      <div className="successCard">
        <div className="successIcon">
          ✓
        </div>

        <h2>{heading}</h2>

        <p className="message">{message}</p>

        <button
          type="button"
          onClick={() => navigate(buttonPath)}
        >
          {buttonText}
        </button>
      </div>
    </Styles>
  );
};

export default SuccessCard;