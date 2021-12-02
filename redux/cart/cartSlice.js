import { createSlice } from '@reduxjs/toolkit';
import { removeItemFromCart } from '../thunks/removeItemFromCart';
import { fetchCart } from '../thunks/fetchCart';

const initialState = {
    items: [],
};

export const { actions, reducer } = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            state.items = payload;
        });

        builder.addCase(removeItemFromCart.fulfilled, (state, { meta }) => {
            state.items = state.items.filter(({ id }) => id !== meta.arg);
        });
    },
});

export default reducer;
