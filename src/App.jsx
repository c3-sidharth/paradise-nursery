import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
  // Controls whether the landing page or the store (product list) is shown
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Landing page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>
              Where Green Meets Serenity. At Paradise Nursery, we bring nature
              closer to your home. Explore our handpicked collection of
              air-purifying, aromatic, and medicinal houseplants to transform
              your space into a lush, living paradise.
            </p>
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Store / product listing page */}
      <div
        className={`product-list-container ${
          showProductList ? 'visible' : ''
        }`}
      >
        <ProductList onHomeClick={() => setShowProductList(false)} />
      </div>
    </div>
  );
}

export default App;
