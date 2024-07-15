import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import './HomePage.css';
import maxidress from './images/maxidress.png';
import pencilskirt from './images/pencilskirt.png';
import blouse from './images/blouse.png';
import casualtshirt from './images/casualtshirt.png';
import denim from './images/denimjacket.png';
import cocktail from './images/cocktail.png';
import logo from './images/logo.png';
import summer from './images/summerdress.jpeg';
import evening from './images/eveningdress.jpeg';
import profile from './images/profile.png'; // Example designer image (replace with actual designer images)

// Random designer names array
const designerNames = [
  'Emily Styles',
  'Lucas Fashion',
  'Grace Couture',
  'Oliver Trends',
  'Sophia Designs',
];

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [likes, setLikes] = useState(0);
  const [designerName, setDesignerName] = useState('');
  const designerImageUrl = profile; // Replace with actual designer images as needed

  useEffect(() => {
    const randomLikes = Math.floor(Math.random() * 2000) + 1000;
    setLikes(randomLikes);
    // Randomly choose a designer name
    const randomIndex = Math.floor(Math.random() * designerNames.length);
    setDesignerName(designerNames[randomIndex]);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 1000);
  };

  return (
    <div className="product-item">
      <div className="product-thumbnail">
        <img src={product.image} alt={product.name} className="product-image" />
        <img src={designerImageUrl} alt="Designer" className="designer-image" />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="like-section">
          <button 
            className={`like-button ${isLiked ? 'liked' : ''} ${isBlinking ? 'blinking' : ''}`} 
            onClick={handleLike}
          >
            ♥
          </button>
          <span className="like-count">{likes} likes</span>
        </div>
        <div className="designer-name">
          Designed by {designerName}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const productListRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const sampleProducts = [
      { name: 'Summer Dress', description: 'Light summer dress', image: summer, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Evening Gown', description: 'Elegant evening gown ', image: evening, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Casual T-Shirt', description: 'Comfortable casual t-shirt', image: casualtshirt, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Maxi Dress', description: 'Flowy maxi dress ', image: maxidress, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Blouse', description: 'Chic blouse for everyday wear', image: blouse, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Pencil Skirt', description: 'Professional pencil skirt ', image: pencilskirt, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Denim Jacket', description: 'Stylish denim jacket', image: denim, likes: Math.floor(Math.random() * 2000) + 1000 },
      { name: 'Cocktail Dress', description: 'Perfect dress for cocktail ', image: cocktail, likes: Math.floor(Math.random() * 2000) + 1000 },
    ];

    sampleProducts.sort((a, b) => b.likes - a.likes);
    setProducts(sampleProducts);
  }, []);

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="brand-name">Lunar </h1>
        </div>
        <div className="header-middle">
          <Autocomplete
            freeSolo
            options={products.map((product) => product.name)}
            value={searchQuery}
            onChange={(event, newValue) => {
              setSearchQuery(newValue);
              const product = products.find(p => p.name === newValue);
              setSelectedProduct(product);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search designs, designers, keywords..."
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar" // Apply the CSS class here
              />
            )}
          />
        </div>
        <div className="header-right">
          <Link to="/home" className="nav-link">Home</Link>
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
                {filteredProducts.slice(0, 5).map((product, index) => (
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
                {filteredProducts.slice(5).map((product, index) => (
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
