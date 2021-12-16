import { createSelector } from '@reduxjs/toolkit';
import { ORDER_STATUS } from '../../constants';
import { api } from '../services/restaurant';

export const selectOrdersResults = api.endpoints.getOrders.select();

export const selectOrders = (state) => selectOrdersResults(state)?.data || [];
export const selectHistoryOrders = createSelector([selectOrders], (orders) =>
    orders.filter((order) => order.status === ORDER_STATUS.COMPLETED)
);
export const selectUpcomingOrders = createSelector([selectOrders], (orders) =>
    orders
        .filter((order) => order.status === ORDER_STATUS.UPCOMING)
        .sort((a, b) => b.date - a.date)
);
