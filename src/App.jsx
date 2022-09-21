import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import LesCroquettes from './pages/LesCroquettes';
import Comparateur from './pages/Comparateur';
import MyAccount from './pages/MyAccount';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='lescroquettes' element={<LesCroquettes />} />
          <Route path='comparateur' element={<Comparateur />} />
          <Route path='moncompte' element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
