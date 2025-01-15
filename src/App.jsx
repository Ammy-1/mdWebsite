//import { useState } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import MdFooter from './components/MdFooter.jsx';
import Home from './pages/Home.jsx';
import Notices from './pages/Notices.jsx';
import Resources from './pages/Resources.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
            <Route path='/services/appointments'/>
            <Route path='/services/fees'/>
            <Route path='/services/policies'/>
            <Route path='/notices' element={<Notices/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>

        <MdFooter/>

      </BrowserRouter>
    </>
  )
}

export default App
