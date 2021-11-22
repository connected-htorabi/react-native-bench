import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableHighlight, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseCardItem from './BaseCardItem';
import CardList from './CardList';

const dummyData2 = [
    { type: 'visa', cardNumber: '****-****-1234' },
    { type: 'mastercard', cardNumber: '****-****-1234' },
    { type: 'amex', cardNumber: '****-****-1234' },
];

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const selectedId = 0;
    const setSelectedId = () => alert('hi');

    return (
        <>
            <TouchableHighlight onPress={onOpen}>
                <BaseCardItem
                    type={dummyData.type}
                    cardNumber={dummyData.cardNumber}
                    isList={false}
                >
                    <Text style={styles.change}>Change</Text>
                </BaseCardItem>
            </TouchableHighlight>
            <Portal>
                <Modalize
                    ref={modalizeRef}
                    adjustToContentHeight
                    flatListProps={{
                        data: dummyData2,
                        renderItem: ({ item, index }) => (
                            <Pressable onPress={() => setSelectedId(index)}>
                                <BaseCardItem {...item}>
                                    {index === selectedId && (
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
                >
                    {/* <CardList /> */}
                </Modalize>
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
