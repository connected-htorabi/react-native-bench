import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders } from '../thunks/fetchOrders';

const initialState = {
    orders: [],
};

export const { actions, reducer } = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
    },
});

export default reducer;
