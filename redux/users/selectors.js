import { createSelector } from '@reduxjs/toolkit';
import { api } from '../services/restaurant';

// TODO - think of making this dynamic
const selectUserResults = api.endpoints.getUser.select(1);
export const selectUser = (state) => selectUserResults(state)?.data || {};
export const selectUsers = (state) => state.users.users;
export const selectUserById = (userId) =>
    createSelector([selectUsers], (users) =>
        users.find((user) => user.id === userId)
    );
