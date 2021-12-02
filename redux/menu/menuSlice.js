import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes } from '../thunks/fetchDishes';

const initialState = {
    dishes: [],
};

export const { actions, reducer } = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDishes.fulfilled, (state, { payload }) => {
            state.dishes = payload;
        });
    },
});

export default reducer;
