import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeItemFromCart = createAsyncThunk(
    'cart/removeItem',
    async (id) => {
        await axios.delete(`cart/${id}`);
    }
);
