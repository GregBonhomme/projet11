import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css'
import Home from './pages/Home'
import Housing from './pages/Housing'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Header />
      <Routes>
        
        <Route path='/housing/:id' element={ <Housing />} />
        <Route path='/' element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

