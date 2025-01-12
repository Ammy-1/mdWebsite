//import { useState } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import MdFooter from './components/MdFooter.jsx';
import Home from './pages/Home.jsx'

function App() {



  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services'/>
          <Route path='/news'/>
          <Route path='/resources'/>
          <Route path='/contact'/>
        </Routes>

        <MdFooter/>

      </BrowserRouter>
    </>
  )
}

export default App
