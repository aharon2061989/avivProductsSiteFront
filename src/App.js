import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import Accessibility  from './components/Accessibility ';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Gallery' element={<PhotoGallery/>}/>
          <Route path='Accessibility' element={<Accessibility/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
