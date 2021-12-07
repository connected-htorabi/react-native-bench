import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/fetchUser';

const initialState = {
    user: [],
};

export const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
    },
});

export default reducer;
