import React from "react";
import { useLocation } from "react-router-dom";
import SuccessCard from "../../components/success-card";

const RegisterSuccess = () => {
  const location = useLocation();
  const firstName = location.state?.firstName || "";

  return (
    <SuccessCard
      heading="Account Created!"
      message={`Welcome, ${firstName}! Your account has been created successfully.`}
      buttonText="GO TO LOGIN"
      buttonPath="/login"
    />
  );
};

export default RegisterSuccess;