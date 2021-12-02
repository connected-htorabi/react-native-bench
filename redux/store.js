import { configureStore } from '@reduxjs/toolkit';

import restaurantReducer from './restaurants/restaurantSlice';

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
