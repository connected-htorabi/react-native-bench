import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data }) => {
        try {
            console.log('url:', url);
            console.log('method:', method);
            console.log('data', data);
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

// Define a service using a base URL and expected endpoints
export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:9001/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => {
                console.log('the name:', name);
                return { url: `pokemon/${name}`, method: 'get' };
            },
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = restaurantApi;
