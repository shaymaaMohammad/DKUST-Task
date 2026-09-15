import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppProviders';
import { Provider } from 'react-redux';
import { store } from "./store";
import AppRoutes from './components/app-routes';


function App() {
  return (
    <Provider store={store}> 
    <AppProvider>

    <div className="app-container">
      {/*  */}
      <Router>
        
        {/* Header  */}
        <Header />
        
        <AppRoutes />
        
        {/* Footer */}
        <Footer />
        
      </Router>
    </div>
    </AppProvider>
    </Provider>
  );
}

export default App;
