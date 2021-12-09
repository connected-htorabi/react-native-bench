import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const initialState = {
    restaurantId: null,
};

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState(initialState),
    reducers: {
        addItem: (
            state,
            {
                payload: {
                    id,
                    restaurantId,
                    quantity,
                    name,
                    description,
                    price,
                },
            }
        ) => {
            if (restaurantId !== state.restaurantId) {
                cartAdapter.removeAll(state);
            }
            state.restaurantId = restaurantId;
            const currentEntity = state.entities[id];
            const exists = !!currentEntity;
            if (exists) {
                cartAdapter.updateOne(state, {
                    id,
                    changes: { quantity: currentEntity.quantity + quantity },
                });
            } else {
                cartAdapter.addOne(state, {
                    id,
                    quantity,
                    name,
                    description,
                    price,
                });
            }
        },
        removeItem: (state, { payload: id }) => {
            cartAdapter.removeOne(state, id);
        },
        resetCart: (state) => {
            state.restaurantId = initialState.restaurantId;
            cartAdapter.removeAll(state);
        },
        resetRestaurantId: (state) => {
            state.restaurantId = initialState.restaurantId;
        },
    },
});

export const { addItem, removeItem, resetCart } = actions;
export default reducer;
