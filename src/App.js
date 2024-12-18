import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/nav';
import Services from './pages/services';
import Products from './pages/products';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import FAQ from './pages/faq';
import Contacts from './pages/contacts';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
