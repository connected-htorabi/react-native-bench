import { createSlice } from '@reduxjs/toolkit';
import { sendCredit } from '../thunks/sendCredit';

const initialState = {
    user: [],
};

export const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            sendCredit.fulfilled,
            (state, { payload: { creditBalance } }) => {
                state.user = { ...state.user, creditBalance };
            }
        );
    },
});

export default reducer;
