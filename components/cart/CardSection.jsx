import React, { useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { Modalize } from 'react-native-modalize';

import CardItem from './CardItem';
import CardList from './CardList';

const dummyData = { type: 'visa', cardNumber: '****-****-1234' };

const CardSection = () => {
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={onOpen}>
                <CardItem
                    type={dummyData.type}
                    cardNumber={dummyData.cardNumber}
                    isList={false}
                />
            </TouchableWithoutFeedback>
            <Modalize ref={modalizeRef} modalHeight={400}>
                <CardList />
            </Modalize>
        </>
    );
};

CardSection.propTypes = {};

export default CardSection;
