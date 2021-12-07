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
        getCart: builder.query({
            query: () => ({ url: 'cart', method: 'get' }),
            transformResponse: (response) => {
                // format the results as would normally be received from backend
                const subtotal = response
                    .map(({ price }) => price)
                    .reduce((acc, curr) => acc + curr, 0);
                const tax = subtotal * 0.13;
                return {
                    subtotal,
                    tax,
                    total: subtotal + tax,
                    items: response,
                };
            },
            providesTags: ['Cart'],
        }),
        removeItemFromCart: builder.mutation({
            query: (id) => ({ url: `cart/${id}`, method: 'delete' }),
            invalidatesTags: ['Cart'],
        }),
        placeOrder: builder.mutation({
            queryFn: () => true,
            onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    dispatch(
                        restaurantApi.util.updateQueryData(
                            'getCart',
                            undefined,
                            () => []
                        )
                    );
                } catch {
                    console.error('Could not place order');
                }
            },
        }),
    }),
});

export const {
    useGetCartQuery,
    useRemoveItemFromCartMutation,
    usePlaceOrderMutation,
} = restaurantApi;
