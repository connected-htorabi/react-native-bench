import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../thunks/fetchRestaurants';

const initialState = {
    restaurants: [],
};

export const { actions, reducer } = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, { payload }) => {
            state.restaurants = payload;
        });
    },
});

export default reducer;
