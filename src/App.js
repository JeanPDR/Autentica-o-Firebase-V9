import React, { useState, useEffect } from 'react';
import Home from './pages/Home/';
import Login from './pages/Login/';
import Register from './pages/Register';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {' '}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
