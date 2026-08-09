import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/login'; 
import Register from './pages/register';     
import Footer from './components/footer';
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
          <Route path="/" element={<Navigate to="/Home" />} />
          
          {/* Route for Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Route for Register page */}
          <Route path="/register" element={<Register />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
