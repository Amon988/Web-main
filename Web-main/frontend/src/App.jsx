import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KezdoLap from './KezdoLap/KezdoLap';
import LoginSignup from './LoginSignup/LoginSignup';
import './App.css'
import DungeonBook from './DungeonBook/DungeonBook';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<KezdoLap />} />
              <Route path="/signup" element={<LoginSignup />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/web.html" element={<h1>Web oldal</h1>} />  
              <Route path="/Book" element={<DungeonBook />} />
          </Routes>
      </Router>
  );
}

export default App
