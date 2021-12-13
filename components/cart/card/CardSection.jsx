import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, TouchableHighlight, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseCardItem from './BaseCardItem';
import {
    selectSelectedCreditCard,
    selectCreditCards,
    selectSelectedCreditCardId,
} from '../../../redux/cart/selectors';
import { selectCreditCard } from '../../../redux/cart/cartSlice';

const CardSection = () => {
    const dispatch = useDispatch();
    const selectedCreditCard = useSelector(selectSelectedCreditCard);
    const creditCards = useSelector(selectCreditCards);
    const selectedCreditCardId = useSelector(selectSelectedCreditCardId);
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableHighlight onPress={onOpen}>
                <BaseCardItem
                    type={selectedCreditCard.type}
                    cardNumber={selectedCreditCard.cardNumber}
                    isList={false}
                >
                    <Text style={styles.change}>Change</Text>
                </BaseCardItem>
            </TouchableHighlight>
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    modalHeight={300}
                    flatListProps={{
                        data: creditCards,
                        renderItem: ({ item, index }) => (
                            <Pressable
                                onPress={() => {
                                    dispatch(selectCreditCard(index));
                                    modalizeRef.current?.close();
                                }}
                            >
                                <BaseCardItem {...item}>
                                    {index === selectedCreditCardId && (
                                        <Icon name="check" color="green" />
                                    )}
                                </BaseCardItem>
                            </Pressable>
                        ),
                        keyExtractor: (_, i) => i,
                        contentContainerStyle: {
                            width: '100%',
                            height: '100%',
                        },
                    }}
                />
            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    change: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default CardSection;
