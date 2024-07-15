import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import './AddDesigns.css';

const AddDesigns = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server

    // After submission, redirect to My Designs page
    navigate('/my-designs');
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Left Section: Logo */}
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="brand-name">Lunar </h1>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="header-right">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/add-designs" className="nav-link">Add Designs</Link>
          <Link to="/my-designs" className="nav-link">My Designs</Link>
        </div>
      </header>

      {/* Content Section */}
      <div className="content">
        <h1>Add Your Designs</h1>
        {/* Form to add new designs */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Design Name" />
          <input type="text" placeholder="Design Description" />
          <input type="file" />
          <button type="submit">Add Design</button>
        </form>
      </div>
    </div>
  );
};

export default AddDesigns;