import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants } from '../thunks/fetchRestaurants';

// user --> wallet
// restaurants --> items
// orders --> cart

// create generic addons (e.g: fries, salt, pepper, etc)
/**
 * restaurant
 * restaurant.id
 * restaurant.name
 * restaurant.imageUrl
 * restaurant.items
 * restaurant.rating
 * restaurant.numReviews
 * restaurant.category
 *
 * item
 * item.name
 * item.price
 * item.description
 * item.image
 * item.deliveryTime
 * item.calories
 */

const initialState = {
    // restaurants: [{ name: '', items: [], addons: [] }],
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
