import { createSelector } from '@reduxjs/toolkit';

export const selectDishes = (state) => state.menu.dishes;
export const selectDishById = (id) =>
    createSelector([selectDishes], (dishes) =>
        dishes.find((dish) => dish.id === id)
    );
