import { configureStore } from '@reduxjs/toolkit';

import restaurantReducer from './restaurants/restaurantSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
