import React, { useState, useEffect } from 'react';
import Home from './Home.jsx';
import Signup from './SignUp.jsx';
import SignIn from './SignIn.jsx';
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
