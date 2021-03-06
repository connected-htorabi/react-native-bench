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
import transfersReducer from './transfers/transfersSlice';
import menuReducer from './menu/menuSlice';
import usersReducer from './users/usersSlice';
import cartReducer from './cart/cartSlice';
import { api } from './services/restaurant';

const cartPersistConfig = {
    key: 'cart',
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        transfers: transfersReducer,
        users: usersReducer,
        menu: menuReducer,
        [api.reducerPath]: api.reducer,
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
        }).concat(api.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
