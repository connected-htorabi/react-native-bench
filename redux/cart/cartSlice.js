import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState({
        restaurantId: null,
    }),
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
            cartAdapter.removeAll(state);
        },
    },
});

export const { addItem, removeItem, resetCart } = actions;
export default reducer;
