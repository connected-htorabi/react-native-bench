import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const initialState = {
    restaurantId: null,
    selectedCreditCardId: 0,
    creditCards: [
        { type: 'visa', cardNumber: '****-****-1234' },
        { type: 'mastercard', cardNumber: '****-****-1234' },
        { type: 'amex', cardNumber: '****-****-1234' },
    ],
};

const { actions, reducer } = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState(initialState),
    reducers: {
        addItem: (
            state,
            { payload: { id, restaurantId, quantity, name, price, options } }
        ) => {
            if (restaurantId !== state.restaurantId) {
                cartAdapter.removeAll(state);
            }
            state.restaurantId = restaurantId;
            cartAdapter.addOne(state, {
                id: nanoid(),
                itemId: id,
                quantity,
                name,
                price,
                options,
            });
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
        replaceCart: (state, { payload: details }) => {
            state.restaurantId = details.restaurantId;
            cartAdapter.setAll(state, details.items);
        },
        selectCreditCard: (state, { payload: creditCardId }) => {
            state.selectedCreditCardId = creditCardId;
        },
    },
});

export const { addItem, removeItem, resetCart, replaceCart, selectCreditCard } =
    actions;
export default reducer;
