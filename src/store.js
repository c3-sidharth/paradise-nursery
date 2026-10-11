import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx';

// Configure the Redux store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
