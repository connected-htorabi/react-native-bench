import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const initialState = {
    restaurantId: null,
};

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState(initialState),
    reducers: {
        addItem: (
            state,
            { payload: { id, restaurantId, quantity, name, price, options } }
        ) => {
            if (restaurantId !== state.restaurantId) {
                cartAdapter.removeAll(state);
            }
            state.restaurantId = restaurantId;
            cartAdapter.addOne(state, {
                id: nanoid(),
                itemId: id,
                quantity,
                name,
                price,
                options,
            });
        },
        removeItem: (state, { payload: id }) => {
            cartAdapter.removeOne(state, id);
        },
        resetCart: (state) => {
            state.restaurantId = initialState.restaurantId;
            cartAdapter.removeAll(state);
        },
        resetRestaurantId: (state) => {
            state.restaurantId = initialState.restaurantId;
        },
        replaceCart: (state, { payload: items }) => {
            state.restaurantId = items[0].restaurantId;
            cartAdapter.setAll(state, items);
        },
    },
});

export const { addItem, removeItem, resetCart, replaceCart } = actions;
export default reducer;
