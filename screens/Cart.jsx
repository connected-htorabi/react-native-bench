import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
    useGetCartQuery,
    usePlaceOrderMutation,
} from '../redux/services/restaurant';

import EmptyCart from '../components/cart/empty/EmptyCart';
import SectionSeparator from '../components/cart/SectionSeparator';
import OrderSection from '../components/cart/order/OrderSection';
import PaymentSection from '../components/cart/payment/PaymentSection';
import NoteSection from '../components/cart/note/NoteSection';
import CardSection from '../components/cart/card/CardSection';

const Cart = () => {
    const [placeOrder] = usePlaceOrderMutation();
    const { items, subtotal, tax, total } = useGetCartQuery(undefined, {
        selectFromResult: ({
            data: {
                subtotal: cartSubtotal,
                tax: cartTax,
                items: cartItems,
                total: cartTotal,
            },
        }) => ({
            subtotal: cartSubtotal,
            tax: cartTax,
            items: cartItems,
            total: cartTotal,
        }),
    });
    return (
        <View style={styles.container}>
            {items.length ? (
                <>
                    <View style={styles.topContainer}>
                        <OrderSection items={items} />
                        <SectionSeparator />
                        <NoteSection />
                        <SectionSeparator />
                        <PaymentSection
                            subtotalValue={subtotal}
                            taxValue={tax}
                            totalValue={total}
                        />
                        <SectionSeparator />
                        <CardSection />
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={placeOrder}>
                            <Text style={styles.placeOrderText}>
                                Place Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <EmptyCart />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    topContainer: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    placeOrderText: {
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default Cart;
