import React from "react";
import SuccessCard from "../../components/success-card";

const LoginSuccess = () => {
  return (
    <SuccessCard
      heading="Login Successful!"
      message="You have been signed in successfully."
      buttonText="GO TO HOME"
      buttonPath="/"
    />
  );
};

export default LoginSuccess;