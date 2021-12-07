import { createSelector } from '@reduxjs/toolkit';
import { ORDER_STATUSES } from '../../constants';

export const selectOrders = (state) => state.orders.orders;
export const selectHistoryOrders = createSelector([selectOrders], (orders) =>
    orders.filter((order) => order.status === ORDER_STATUSES.COMPLETED)
);
