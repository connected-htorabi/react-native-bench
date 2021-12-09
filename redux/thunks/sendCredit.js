import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendCredit = createAsyncThunk(
    'users/sendCredit',
    async ({
        senderId,
        recipientId,
        senderBalance,
        recipientBalance,
        amount,
    }) => {
        const { data } = await axios.patch(`users/${senderId}`, {
            creditBalance: senderBalance - amount,
        });
        await axios.patch(`users/${recipientId}`, {
            creditBalance: recipientBalance + amount,
        });
        return data;
    }
);
