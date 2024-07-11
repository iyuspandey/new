


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Log from './COMPONENT/Login';
import Signup from './COMPONENT/signup';
import Team from './COMPONENT/about';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Log />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<Team/>}/>
        </Routes>
        <Team/>
      </div>
    </Router>
  );
}

export default App;
