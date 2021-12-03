import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import restaurantReducer from './restaurants/restaurantSlice';
import menuReducer from './menu/menuSlice';
import orderReducer from './orders/orderSlice';
import { restaurantApi } from './services/restaurant';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        menu: menuReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
        orders: orderReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restaurantApi.middleware),
});

setupListeners(store.dispatch);
