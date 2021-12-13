import { createSelector } from '@reduxjs/toolkit';
import { round, sumBy } from 'lodash';

import { cartAdapter } from './cartSlice';

export const {
    selectAll: selectAllCartItems,
    selectTotal: selectNumCartItems,
} = cartAdapter.getSelectors((state) => state.cart);
export const selectAllCartItemsWithOptions = createSelector(
    [selectAllCartItems],
    (cartItems) =>
        cartItems.map((item) => ({
            ...item,
            itemSubtotal:
                item.price + sumBy(item.options || [], (o) => o.price),
        }))
);
export const selectCartSubtotal = createSelector(
    [selectAllCartItemsWithOptions],
    (items) => sumBy(items, (item) => item.itemSubtotal * item.quantity)
);
export const selectCartTax = createSelector([selectCartSubtotal], (subtotal) =>
    round(subtotal * 0.13, 2)
);
export const selectCartTotal = createSelector(
    [selectCartSubtotal, selectCartTax],
    (subtotal, tax) => round(subtotal + tax, 2)
);

export const selectRestaurantId = (state) => state.cart.restaurantId;
