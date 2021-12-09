import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId) => {
    const { data } = await axios.get(`users/${userId}`);
    const { data: allUsers } = await axios.get('users');
    const friends = allUsers.filter((user) => data.friends.includes(user.id));
    data.friends = friends;
    return data;
});
