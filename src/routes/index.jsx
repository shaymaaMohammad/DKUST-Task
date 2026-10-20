import React from "react";
import PathConstants from "./PathConstants";
// import PrivateRoutes from "../component/routes/PrivateRoutes";

const HomePage = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/login"));
const Register = React.lazy(() => import("../pages/register"));
const ProductsPage = React.lazy(() => import("../pages/products"));
const ProductDetailsPage = React.lazy(() => import("../pages/productDetails"));
const QuizPage = React.lazy(() => import("../pages/quiz"));
const RegisterSuccess = React.lazy(() => import("../pages/register-success"));
const LoginSuccess = React.lazy(() => import("../pages/login-success"));
const ServicesPage = React.lazy(() => import("../pages/services"));

const routes = [
  { path: PathConstants.HOME, element: <HomePage /> },
  { path: PathConstants.REGISTER, element: <Register /> },
  { path: PathConstants.LOGIN, element: <Login /> },
  { path: PathConstants.PRODUCTS, element: <ProductsPage /> },
  { path: PathConstants.QUIZ, element: <QuizPage /> },
  { path: PathConstants.LOGINSUCCESS, element: <LoginSuccess /> },
  { path: PathConstants.REGISTERSUCCESS, element: <RegisterSuccess /> },
  { path: PathConstants.PRODUCTSDETAILS, element: <ProductDetailsPage /> },
  { path: PathConstants.SERVICES, element: <ServicesPage /> },
];

export default routes;
