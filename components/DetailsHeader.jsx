import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DetailsHeader = ({ title }) => <Text style={styles.header}>{title}</Text>;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: '700',
    },
});

export default DetailsHeader;
