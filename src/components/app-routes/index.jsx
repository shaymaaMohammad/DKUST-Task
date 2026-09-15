import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ProductsPage from "../../pages/products";
import ProductDetailsPage from "../../pages/productDetails";
import QuizPage from "../../pages/quiz";
import RegisterSuccess from "../../pages/register-success";
import LoginSuccess from "../../pages/login-success";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
    </Routes>
  );
};

export default AppRoutes;