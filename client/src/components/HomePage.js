import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Generate a random number between 1k and 3k for likes
    const randomLikes = Math.floor(Math.random() * 2000) + 1000;
    setLikes(randomLikes);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 1000); // Stop blinking after 1 second
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="like-section">
          <button 
            className={`like-button ${isLiked ? 'liked' : ''} ${isBlinking ? 'blinking' : ''}`} 
            onClick={handleLike}
          >
            ♥
          </button>
          <span className="like-count">{likes} likes</span>
        </div>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

const HomePage = () => {
  const productListRef = useRef(null);

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: -300, // Adjust this value based on the width of each product-item
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: 300, // Adjust this value based on the width of each product-item
        behavior: 'smooth',
      });
    }
  };

  // Sample products data
  const products = [
    { name: 'Product 1', description: 'Product 1 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 2', description: 'Product 2 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 3', description: 'Product 3 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 4', description: 'Product 4 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 5', description: 'Product 5 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 6', description: 'Product 6 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 7', description: 'Product 7 Description', image: 'https://via.placeholder.com/300' },
    { name: 'Product 8', description: 'Product 8 Description', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img src="path_to_your_logo_image" alt="Logo" className="logo" />
          <h1 className="brand-name">Your Brand Name</h1>
        </div>
        <div className="header-middle">
          <input
            type="text"
            placeholder="Search designs, designers, keywords..."
            className="search-input"
          />
        </div>
        <div className="header-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add-designs" className="nav-link">Add Designs</Link>
          <Link to="/my-designs" className="nav-link">My Designs</Link>
        </div>
      </header>
      <main className="main-content">
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list" ref={productListRef}>
            <div className="product-carousel">
              <div className="product-items">
                {products.map((product, index) => (
                  <ProductItem key={index} product={product} />
                ))}
              </div>
              <button className="arrow left-arrow" onClick={scrollLeft}>{'<'}</button>
              <button className="arrow right-arrow" onClick={scrollRight}>{'>'}</button>
            </div>
          </div>
        </section>
        <section className="trend-board-carousel">
          <h2>Trend Board Carousel</h2>
          <div className="trend-boards">
            <div className="trend-board">
              <h3>Bohemian Vibes</h3>
              <p>Explore the free-spirited style</p>
              <Link to="/bohemian" className="explore-btn">Explore Now</Link>
            </div>
            <div className="trend-board">
              <h3>Sustainable Style</h3>
              <p>Discover eco-friendly fashion</p>
              <Link to="/sustainable" className="explore-btn">Explore Now</Link>
            </div>
            <div className="trend-board">
              <h3>Summer Streetwear</h3>
              <p>Stay cool in the latest street fashion</p>
              <Link to="/streetwear" className="explore-btn">Explore Now</Link>
            </div>
            <div className="carousel-controls">
              <span className="arrow left-arrow" onClick={scrollLeft}>{"<"}</span>
              <span className="arrow right-arrow" onClick={scrollRight}>{" >"}</span>
            </div>
          </div>
        </section>
        <section className="more-products">
          <h2>New Arrivals</h2>
          <div className="product-list">
            <div className="product-carousel">
              <div className="product-items">
                {products.map((product, index) => (
                  <ProductItem key={index + products.length} product={product} />
                ))}
              </div>
              <button className="arrow left-arrow" onClick={scrollLeft}>{'<'}</button>
              <button className="arrow right-arrow" onClick={scrollRight}>{'>'}</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
