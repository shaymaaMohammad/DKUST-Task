import { useState } from 'react';

export const useLoginController = () => {
  // Define states for login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Function to handle login form submission
  const login = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe
    };
    console.log(userData);
  };

  const googleLogin = () => console.log("Sign in with Google");
  const facebookLogin = () => console.log("Sign in with Facebook");
  
  const forgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password");
  };

  return {
    email, setEmail,
    password, setPassword,
    rememberMe, setRememberMe,
    login,
    googleLogin,
    facebookLogin,
    forgotPassword
  };
};
