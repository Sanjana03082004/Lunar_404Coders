import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyDesigns.css';
import jeanss from './images/jeanss.jpeg';
import logo from './images/logo.png'; // Assuming logo path is correct // Replace with actual image paths
import Crop from './images/croptop.jpeg';

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const randomLikes = Math.floor(Math.random() * 2000) + 1000;
    setLikes(randomLikes);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
  };

  return (
    <div className="design-item">
      <img src={product.image} alt={product.name} className="design-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="like-section">
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`} 
          onClick={handleLike}
        >
          ♥
        </button>
        <span className="like-count">{likes} likes</span>
      </div>
    </div>
  );
};

const MyDesigns = () => {
  const [myDesigns, setMyDesigns] = useState([]);

  useEffect(() => {
    const sampleDesigns = [
      { name: 'Jeans', description: 'Stylish denim bottoms ', image: jeanss },
      { name: 'Crop Top', description: 'Trendy top Trendy you', image: Crop },
      // Add more designs as needed
    ];

    setMyDesigns(sampleDesigns);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        {/* Left Section: Logo */}
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="brand-name">Lunar</h1>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="header-right">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/add-designs" className="nav-link">Add Designs</Link>
          <Link to="/my-designs" className="nav-link">My Designs</Link>
        </div>
      </header>

      {/* Main Content: My Designs */}
      <div className="my-designs-container">
        <h2>My Designs</h2>
        <div className="design-list">
          {myDesigns.map((design, index) => (
            <ProductItem key={index} product={design} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDesigns;
