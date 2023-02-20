import React, { useState, useEffect } from 'react';
import Home from './pages/Home/';
import Login from './pages/Login/';
import Register from './pages/Register';

import Driver from './pages/Driver';
import Passenger from './pages/Passenger/index';
import Admin from './pages/Admin';




import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {' '}
            <Route exact path="/" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/passenger" element={<Passenger />} />
            <Route path="/admin" element={<Admin />} />
            
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
