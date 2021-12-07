import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
    const { data } = await axios.get(`users/${userId}`);
    return data;
});
