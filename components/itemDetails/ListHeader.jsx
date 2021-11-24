import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ImageHeader from '../ImageHeader';
import DetailsHeader from '../DetailsHeader';

const ListHeader = ({ name, imageUrl, description }) => (
    <>
        <ImageHeader imageUrl={imageUrl} />
        <View style={styles.detailsContainer}>
            <DetailsHeader title={name} />
            <Text>{description}</Text>
        </View>
    </>
);

ListHeader.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});

export default ListHeader;
