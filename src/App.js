import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login'; 
import HomePage from './pages/home'
import Register from './pages/register';     
import Footer from './components/footer';
import ProductsPage from './pages/products';
import ProductDetailsPage  from './pages/productDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      {/*  */}
      <Router>
        
        {/* Header  */}
        <Header />
        
        {/* Routes */}
        <Routes>
          {/* Default route redirects to Home */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Route for Register page */}
          <Route path="/register" element={<Register />} />
          
          {/* Route for Products page */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
