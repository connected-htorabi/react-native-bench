import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    FlatList,
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
import { PageHeader } from '../components/PageHeader';
import { meals } from '../components/CategoryData';
import useResults from '../hooks/useResults';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import ResultsList from '../components/ResultsList';
import CategoryItem from '../components/CategoryItem';
import { selectRestaurants } from '../redux/restaurants/selectors';
export default function Browse({ navigation, route }) {
    const restaurants = useSelector(selectRestaurants);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'

        return results.filter((result) => {
            return result.price === price;
        });
    };
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <PageHeader title="Browse" navigation={navigation} />
            <View
                style={{
                    marginTop: 2,
                    marginBottom: 1,
                    marginRight: 4,
                    position: 'relative',
                    justifyContent: 'center',
                }}
            >
                <Ionicons
                    name="search-sharp"
                    size={20}
                    color="black"
                    style={{
                        zIndex: 10,
                        position: 'absolute',
                        alignSelf: 'center',
                        left: 16,
                    }}
                />
                <TextInput
                    style={
                        (styles.input,
                        {
                            borderRadius: 10,
                            backgroundColor: '#C0C0C0',
                            paddingBottom: 8,
                            paddingTop: 8,
                            paddingLeft: 20,
                            paddingLeft: 36,
                            paddingRight: 20,
                        })
                    }
                    value={term}
                    onChangeText={setTerm}
                    onEndEditing={() => searchApi(term)}
                    placeholder="Search anything"
                />
            </View>
            {!term ? (
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text
                        style={{ fontSize: 20, marginTop: 8, marginLeft: 16 }}
                    >
                        Top meals
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginLeft: 8,
                            marginRight: 8,
                        }}
                    >
                        {meals?.map(({ title, image, id }) => (
                            <CategoryItem
                                title={title}
                                image={image}
                                id={id}
                                onPress={() =>
                                    navigation.navigate('Results Show', {
                                        category: title,
                                        results: restaurants,
                                    })
                                }
                            />
                        ))}
                    </View>
                </ScrollView>
            ) : (
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <ResultsList
                            results={filterResultsByPrice('$')}
                            title="$"
                        />
                        <ResultsList
                            results={filterResultsByPrice('$$')}
                            title="$$"
                        />
                        <ResultsList
                            results={filterResultsByPrice('$$$')}
                            title="$$$"
                        />
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
        borderColor: '#F3F3F3',
        borderWidth: 1,
    },
});
