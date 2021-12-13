import { createSelector } from '@reduxjs/toolkit';
import { round } from 'lodash';

import { cartAdapter } from './cartSlice';

export const {
    selectAll: selectAllCartItems,
    selectTotal: selectNumCartItems,
} = cartAdapter.getSelectors((state) => state.cart);
export const selectCartSubtotal = createSelector(
    [selectAllCartItems],
    (items) =>
        items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
);
export const selectCartTax = createSelector([selectCartSubtotal], (subtotal) =>
    round(subtotal * 0.13, 2)
);
export const selectCartTotal = createSelector(
    [selectCartSubtotal, selectCartTax],
    (subtotal, tax) => round(subtotal + tax, 2)
);

export const selectRestaurantId = (state) => state.cart.restaurantId;
