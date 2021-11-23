import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';

import BaseCardItem from './BaseCardItem';
import CardList from './CardList';

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

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
                <Modalize ref={modalizeRef} adjustToContentHeight>
                    <CardList />
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
