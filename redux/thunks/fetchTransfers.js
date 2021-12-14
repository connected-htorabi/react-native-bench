import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransfers = createAsyncThunk(
    'user/fetchTransfers',
    async () => {
        const { data } = await axios.get(`transferHistory`);
        return data;
    }
);
