import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

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
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({ url: 'restaurants', method: 'get' }),
        }),
        getRestaurantDishes: builder.query({
            query: (restaurantId) => ({
                url: `restaurants/${restaurantId}/dishes`,
                method: 'get',
            }),
        }),
        getCart: builder.query({
            query: () => ({ url: 'cart', method: 'get' }),
            providesTags: ['Cart'],
        }),
        removeItemFromCart: builder.mutation({
            query: (id) => ({ url: `cart/${id}`, method: 'delete' }),
            invalidatesTags: ['Cart'],
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetCartQuery,
    useGetRestaurantDishesQuery,
    useRemoveItemFromCartMutation,
} = restaurantApi;
