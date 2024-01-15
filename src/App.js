import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
