import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { resetCart } from '../cart/cartSlice';

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method = 'get', data }) => {
        try {
            const result = await axios({ url: baseUrl + url, method, data });
            return { data: result.data };
        } catch (axiosError) {
            const err = axiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data,
                },
            };
        }
    };

export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:9001/' }),
    tagTypes: ['Orders', 'Users'],
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({ url: 'orders?_expand=restaurant' }),
            providesTags: ['Orders'],
        }),
        placeOrder: builder.mutation({
            query: (order) => ({
                url: 'orders',
                method: 'post',
                data: { ...order, date: Date.now(), status: 'upcoming' },
            }),
            invalidatesTags: ['Orders'],
        }),
        getUser: builder.query({
            // Note: userId will be passed an arg
            query: () => ({ url: 'users' }),
            transformResponse: (response, _meta, { originalArgs: userId }) => {
                const myData = response.find((person) => person.id === userId);
                const friends = response.filter((person) =>
                    myData.friends.includes(person.id)
                );
                return { ...myData, friends };
            },
            providesTags: ['Users'],
        }),
        sendCredits: builder.mutation({
            /**
             * args.senderId
             * args.recipientId
             * args.senderBalance
             * args.recipientBalance
             * args.amount
             */
            query: ({ senderId, senderBalance, amount }) => ({
                url: `users/${senderId}`,
            }),
        }),
    }),
});

export const { useGetOrdersQuery, usePlaceOrderMutation, useGetUserQuery } =
    api;
