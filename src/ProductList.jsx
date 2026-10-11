import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of items across all plants in the cart (for the cart icon badge)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the air and removes toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to care for and effective at removing toxins.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies the air and has healing properties.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1024&auto=format&fit=crop',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1024&auto=format&fit=crop',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/28/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/07/09/18/23/mint-1505x1004.jpg',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/12/11/58/lemon-balm-4471764_1280.jpg',
          description: 'Citrusy scent, relieves stress and promotes sleep.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Beautiful flowers with a captivating scent.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Echinacea',
          image:
            'https://cdn.pixabay.com/photo/2014/09/05/18/22/echinacea-436936_1280.jpg',
          description: 'Boosts the immune system and reduces inflammation.',
          cost: '$16',
        },
        {
          name: 'Chamomile',
          image:
            'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Soothes anxiety and promotes better sleep.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image:
            'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'Heals wounds and soothes skin irritations.',
          cost: '$17',
        },
        {
          name: 'Yarrow',
          image:
            'https://cdn.pixabay.com/photo/2016/07/13/09/48/yarrow-1514064_1280.jpg',
          description: 'Supports digestion and reduces inflammation.',
          cost: '$18',
        },
        {
          name: 'Ginger',
          image:
            'https://cdn.pixabay.com/photo/2018/08/27/09/13/ginger-3634515_1280.jpg',
          description: 'Relieves nausea and improves digestion.',
          cost: '$14',
        },
        {
          name: 'Peppermint',
          image:
            'https://cdn.pixabay.com/photo/2017/07/12/13/23/peppermint-2496210_1280.jpg',
          description: 'Relieves headaches and aids digestion.',
          cost: '$13',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar appears on both Product Listing and Cart pages */}
      <div className="navbar">
        <div className="navbar-brand">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery logo"
          />
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
            Home
          </a>
          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#" onClick={handleCartClick} className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h1 className="category-title">{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className={`product-button ${
                        addedToCart[plant.name] ? 'added-to-cart' : ''
                      }`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
