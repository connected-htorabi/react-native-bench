import { createSelector } from '@reduxjs/toolkit';
import { ORDER_STATUS } from '../../constants';

export const selectOrders = (state) => state.orders.orders;
export const selectHistoryOrders = createSelector([selectOrders], (orders) =>
    orders.filter((order) => order.status === ORDER_STATUS.COMPLETED)
);
export const selectUpcomingOrders = createSelector([selectOrders], (orders) =>
    orders.filter((order) => order.status === ORDER_STATUS.UPCOMING)
);
