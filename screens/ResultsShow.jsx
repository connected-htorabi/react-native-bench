import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, ScrollView,View, SafeAreaView } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import RestaurantItem from '../components/RestaurantItem';

const ResultsShow = ({ navigation, route}) => {

const category = route.params.category
const arr = route.params.results

const result = getAllIndexes(arr, category);


const renderItem = ({ item }) => {
 

  return (
    <RestaurantItem
    name={item.name}
    imageUrl={item.imageUrl}
    price={item.price}
    rating={item.rating}
    numReviews= {item.numReviews}
    deliveryTime = {item.deliveryTime}
    onPress={() =>
        navigation.navigate('Restaurant Details', {
            id: item.id,
        })
    }
/>
  );
};

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <Text style={styles.text}>{route.params.category}</Text>
      <FlatList
        
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
   </SafeAreaView>
  );
};
const getAllIndexes = (arr, val) => {
  var indexes = [], i;
  for(i = 0; i < arr.length; i++)
      if (arr[i].category === val)
          indexes.push(arr[i]);
          
  return indexes;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center'
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginBottom: 5,
    alignSelf: 'center',
    flexDirection: 'row'
  }
});

export default ResultsShow;