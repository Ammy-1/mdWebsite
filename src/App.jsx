//import { useState } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import MdFooter from './components/MdFooter.jsx';
import Home from './pages/Home.jsx';
import Notices from './pages/Notices.jsx';
import Resources from './pages/Resources.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Appointments from './pages/Appointments.jsx';
import Policies from './pages/Policies.jsx';
import Fees from './pages/Fees.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <ScrollToTop/>
        <Routes>

          <Route path='/' element={<Home/>}/>
            <Route path='/services/appointments' element={<Appointments/>}/>
            <Route path='/services/fees' element={<Fees/>}/>
            <Route path='/services/policies' element={<Policies/>}/>
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
