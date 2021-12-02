import { createSelector } from '@reduxjs/toolkit';

export const selectRestaurants = (state) => state.restaurants.restaurants;
export const selectRestaurantById = (id) =>
    createSelector([selectRestaurants], (restaurants) =>
        restaurants.find((restaurant) => restaurant.id === id)
    );
