import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Button,
} from 'react-native';
import { PageHeader } from '../components/PageHeader';
import {meals} from "../components/CategoryData"
export default function Browse({ navigation, route }) {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = price => {
        // price === '$' || '$$' || '$$$'
        console.log(results)
        return results.filter(result => {
          return result.price === price;
        });
      };
    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <PageHeader title="Browse" navigation={navigation} />
            <View style={{marginTop:2, marginBottom:1, marginRight:4, position:'relative', justifyContent:'center'}}>
                    <Ionicons name="search-sharp" size={20} color="black" style={{zIndex:10, position:'absolute',alignSelf:'center',left:16 }} />
                    <TextInput style={styles.input,{borderRadius:10,backgroundColor:'#C0C0C0',paddingBottom:8,paddingTop:8, paddingLeft:20,paddingLeft:36, paddingRight:20}} value={term} onChangeText={setTerm} onEndEditing={()=>searchApi(term)}placeholder="Search anything" />
                </View>
                {!term?(
    <ScrollView style={{flex:1}}showsVerticalScrollIndicator={false}>
      
         
         <Text style={{fontSize:20,marginTop:8, marginLeft:16}}>Top meals</Text>
         <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginLeft:8, marginRight:8}}>
             {meals?.map(({ title, image, id }) => (
                <CategoryItem title={title} 
                image={image}
                id={id}
                onPress={navigate}
             />
             ))}
         </View>
         </ScrollView>
      ):(
        <ScrollView style={{flex:1}}showsVerticalScrollIndicator={false}>
      
                <View>
                <ResultsList
          results={filterResultsByPrice("$")}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice("$$")} title='Pricier' />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title='Expensive'
        />
                </View>
      

            </ScrollView>
      )
}
        </SafeAreaView>
    );
}
