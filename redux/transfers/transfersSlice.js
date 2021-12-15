import { createSlice } from '@reduxjs/toolkit';
import { fetchTransfers } from '../thunks/fetchTransfers';

const initialState = {
    transfers: [],
};

export const { actions, reducer } = createSlice({
    name: 'transfers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTransfers.fulfilled, (state, { payload }) => {
            state.transfers = payload;
        });
    },
});

export default reducer;
