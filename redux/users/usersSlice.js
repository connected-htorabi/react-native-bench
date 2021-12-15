import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const initialState = {
    users: [],
};

export const { actions, reducer } = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
            state.users = payload;
        });
    },
});

export default reducer;
