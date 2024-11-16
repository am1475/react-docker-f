import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Input from './components/Input';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route 
          path="/" 
          element={
            <div>
             
              <Hero />
              <Features />
              <Testimonials />
              <Contact />
              <Footer />
              
            </div>
          }
        />
        <Route path="/signup" element={
          <div>
            <Signup />
            <Footer />
            </div>} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/input" element={
          <div>
            <Input />
            <Footer />
          </div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        {/* Add more routes as needed */}
        <Route path="/dashboard" element={
          <div>
            <Dashboard />
        </div>} />
      </Routes>
    
    </BrowserRouter>
  );
}
