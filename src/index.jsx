import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/index.css'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error404 from './pages/Error404'
import Navigate from './utils/hooks/Navigate'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
      <Header />
      <Routes>
        
        <Route path='/housing/:id' element={ <Housing />} />
        <Route path='/about/' element={<About />}/>
        <Route path='/error404/' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate url='/error404/' />}></Route>
        
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

