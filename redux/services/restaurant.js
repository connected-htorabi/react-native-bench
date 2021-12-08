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
    tagTypes: ['CartItems'],
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => ({ url: 'cartItems', method: 'get' }),
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
            providesTags: ['CartItems'],
        }),
        addItemToCart: builder.mutation({
            /**
             * @param {String} item.id
             * @param {Number} item.quantity
             */
            query: (item) => ({ url: 'cartItems', method: 'post', data: item }),
            invalidatesTags: ['CartItems'],
        }),
        removeItemFromCart: builder.mutation({
            query: (id) => ({ url: `cartItems/${id}`, method: 'delete' }),
            invalidatesTags: ['CartItems'],
        }),
        placeOrder: builder.mutation({
            // TODO - add query to place an order
            // query: (items) => ({ url: 'CartItems', method: 'post', data: items }),
            queryFn: () => ({ data: null }),
            onQueryStarted: async (_arg, { getState, queryFulfilled }) => {
                try {
                    /**
                     * deleting each item in the cart
                     * json-server delete /cart doesn't set to empty array - this is a workaround
                     */
                    const state = getState();
                    const selectCartData =
                        restaurantApi.endpoints.getCart.select();
                    const {
                        data: { items },
                    } = selectCartData(state);
                    const ids = items.map(({ id }) => id);

                    const removeItem = (id) => axios.delete(`cartItems/${id}`);
                    const removeItems = ids.map((id) => removeItem(id));
                    await Promise.all([...removeItems, queryFulfilled]);
                } catch {
                    // eslint-disable-next-line no-console
                    console.error('placing order failed');
                }
            },
            invalidatesTags: ['CartItems'],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddItemToCartMutation,
    useRemoveItemFromCartMutation,
    usePlaceOrderMutation,
} = restaurantApi;
