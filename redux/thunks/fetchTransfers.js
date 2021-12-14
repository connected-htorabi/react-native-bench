import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransfers = createAsyncThunk(
    'transfers/fetchTransfers',
    async () => {
        const { data } = await axios.get(`transfers`);
        return data;
    }
);
