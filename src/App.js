import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import AddDesigns from './components/AddDesigns';
import MyDesigns from './components/MyDesigns';



function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/add-designs" element={<AddDesigns />} />
      <Route path="/my-designs" element={<MyDesigns />} />
    </Routes>
  );
}

export default App;
