import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import restaurantReducer from './restaurants/restaurantSlice';
import menuReducer from './menu/menuSlice';
import orderReducer from './orders/orderSlice';
import userReducer from './users/userSlice';
import cartReducer from './cart/cartSlice';
import { restaurantApi } from './services/restaurant';

const cartPersistConfig = {
    key: 'cart',
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        menu: menuReducer,
        [restaurantApi.reducerPath]: restaurantApi.reducer,
        orders: orderReducer,
        user: userReducer,
        cart: persistReducer(cartPersistConfig, cartReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(restaurantApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
