# Paradise Nursery Shopping Application

Paradise Nursery is a dynamic e-commerce shopping cart application for an online
plant shop. It is the final project built with **React** and **Redux Toolkit**,
applying the skills from previous practice projects to create a functional,
user-friendly shopping experience.

## Features

- **Landing Page** — A welcoming landing page featuring the company name, a
  background image, an "About Us" section, and a "Get Started" button.
- **Product Listing Page** — Browse at least six unique houseplants across three
  categories (Air Purifying, Aromatic Fragrant, and Medicinal), each with a
  thumbnail, name, description, and price.
- **Add to Cart** — Each plant has an "Add to Cart" button that adds the item to
  the cart, disables itself after adding, and increments the cart icon count.
- **Navigation Bar** — A navbar on both the Product Listing and Cart pages with
  links to Home, Plants, and Cart, including a dynamic cart item count.
- **Shopping Cart Page** — View the total cart amount, per-item subtotals,
  thumbnails, unit prices, quantity controls (increase/decrease), a delete
  button for each item, a "Coming Soon" checkout, and a "Continue Shopping"
  button.

## Tech Stack

- React 18
- Redux Toolkit (`@reduxjs/toolkit`) and React Redux
- Vite (build tool and dev server)

## Project Structure

```
src/
├── App.jsx          # Landing page + routing between store and cart
├── App.css          # Landing page styles incl. background image
├── AboutUs.jsx      # Company "About Us" details
├── AboutUs.css
├── ProductList.jsx  # Product listing, navbar, add-to-cart logic
├── ProductList.css
├── CartItem.jsx     # Shopping cart page
├── CartItem.css
├── CartSlice.jsx    # Redux slice for the shopping cart
├── store.js         # Redux store configuration
├── main.jsx         # App entry point with Redux Provider
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

Then open the local URL printed in the terminal (typically
`http://localhost:5173`).

## Author

Final Project — Paradise Nursery Shopping Application.
