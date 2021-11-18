import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

import ImageHeader from '../components/ImageHeader';
import DetailsHeader from '../components/DetailsHeader';
import { CONTAINER_PADDING, itemOptions } from '../constants';

const ItemDetails = ({ route }) => {
    const { item: details } = route.params;

    const renderHeader = () => (
        <>
            <ImageHeader imageUrl={details.image_url} />
            <View style={styles.detailsContainer}>
                <DetailsHeader title={details.name} />
                <Text>{details.description}</Text>
            </View>
        </>
    );

    const renderSectionHeader = ({ section: { sectionName } }) => (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>{sectionName}</Text>
        </View>
    );

    return (
        <SectionList
            style={styles.container}
            ListHeaderComponent={renderHeader}
            sections={itemOptions}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text>{item}</Text>}
            renderSectionHeader={renderSectionHeader}
            SectionSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionHeaderContainer: {
        justifyContent: 'center',
        width: '100%',
        height: 50,
        fontSize: 30,
        paddingHorizontal: 20,
        backgroundColor: '#dedede',
    },
    sectionHeaderText: {
        fontSize: 18,
    },
});

export default ItemDetails;
