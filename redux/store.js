import { configureStore } from '@reduxjs/toolkit';

import restaurantReducer from './restaurants/restaurantSlice';
import cartReducer from './cart/cartSlice';
import menuReducer from './menu/menuSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        cart: cartReducer,
        menu: menuReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
