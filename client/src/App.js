import React from 'react';

import './App.css';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';
import Signin from './components/Signin';
import Signup from './components/Signup';
import VerificationEmail from './components/VerificationEmail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}  />
        <Route path="/dashboard/*" element={<DashBoard />}  />
        <Route path = "/signin" element  = {<Signin />} />
        <Route path = "/signup" element  = {<Signup />} />
        <Route path = "/verification" element  = {<VerificationEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
