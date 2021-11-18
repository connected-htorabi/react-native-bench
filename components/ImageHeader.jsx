import React from 'react';
import { Image, Text, Dimensions, StyleSheet } from 'react-native';

const ImageHeader = ({ imageUrl, parentPadding, style }) => (
    <Image
        resizeMode="cover"
        style={[
            styles.headerImage,
            { marginHorizontal: -parentPadding },
            style,
        ]}
        source={{ uri: imageUrl }}
    />
);

const styles = StyleSheet.create({
    headerImage: {
        // TODO: Find a better way to do this
        height: Dimensions.get('window').height * 0.25,
    },
});

export default ImageHeader;
