import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const { data } = await axios.get('orders?_expand=restaurant');
    return data;
});
