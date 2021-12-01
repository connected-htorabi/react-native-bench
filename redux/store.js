import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import restaurantReducer from './restaurants/restaurantSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        restaurants: restaurantReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
