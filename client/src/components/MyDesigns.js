import React from 'react';

const MyDesigns = () => {
  return (
    <div className="my-designs-container">
      <h2>My Designs</h2>
      <div className="design-list">
        <div className="design-item">
          <img src="https://via.placeholder.com/150" alt="Design 1" className="design-image" />
          <h3>Design 1</h3>
          <p>Design 1 Description</p>
        </div>
        <div className="design-item">
          <img src="https://via.placeholder.com/150" alt="Design 2" className="design-image" />
          <h3>Design 2</h3>
          <p>Design 2 Description</p>
        </div>
      </div>
    </div>
  );
};

export default MyDesigns;
