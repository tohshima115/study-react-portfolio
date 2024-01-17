import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Top from './pages/Top/Top';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Studies from './pages/Studies/Studies';
import Contact from './pages/Contact/Contact';
import Univers from './components/Univers';
import Cover from './components/Cover';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cover />
      <Univers />
      <Routes>
        <Route path="/" element={<Top />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/works" element={<Works />} /> 
        <Route path="/studies" element={<Studies />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

