import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import AddDesigns from './AddDesigns';

function App() {
  const [designs, setDesigns] = useState([]);

  const addDesign = (design) => {
    setDesigns([...designs, design]);
  };

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage designs={designs} />} />
      <Route path="/add-designs" element={<AddDesigns addDesign={addDesign} />} />
    </Routes>
  );
}

export default App;
