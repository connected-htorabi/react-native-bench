import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDishes = createAsyncThunk(
    'cart/fetchDishes',
    async (restaurantId) => {
        const { data } = await axios.get(`restaurants/${restaurantId}/dishes`);
        return data;
    }
);
