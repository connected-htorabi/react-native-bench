import { createSelector } from '@reduxjs/toolkit';

import { cartAdapter } from './cartSlice';

export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors(
    (state) => state.cart
);
export const selectCartSubtotal = createSelector(
    [selectAllCartItems],
    (items) =>
        items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
);
export const selectCartTax = createSelector(
    [selectCartSubtotal],
    (subtotal) => subtotal * 0.13
);
export const selectCartTotal = createSelector(
    [selectCartSubtotal, selectCartTax],
    (subtotal, tax) => subtotal + tax
);

export const selectRestaurantId = (state) => state.cart.restaurantId;
