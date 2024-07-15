import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>Welcome to Your MERN App!</h1>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default WelcomePage;
