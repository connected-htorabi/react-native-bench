import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { resetCart } from '../cart/cartSlice';

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data }) => {
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

export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:9001/' }),
    tagTypes: ['CartItems'],
    endpoints: (builder) => ({
        placeOrder: builder.mutation({
            // TODO - add query to place an order
            // query: (items) => ({ url: 'CartItems', method: 'post', data: items }),
            queryFn: () => ({ data: null }),
            invalidatesTags: ['CartItems'],
        }),
    }),
});

export const { usePlaceOrderMutation } = restaurantApi;
