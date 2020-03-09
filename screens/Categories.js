import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

export default function Categories({ navigation }) {

  const [state, setState] = useState({
    categories: [
      {id: 1, name: 'Đi làm'},
      {id: 2, name: 'Đi chơi'},
      {id: 3, name: 'Đi học'},
      {id: 4, name: 'Đi ngủ'},
      {id: 5, name: 'Đi đái'},
      {id: 6, name: 'Đi ăn'},
    ]
  })

  const { categories } = state

  return (
    <View>
        <FlatList data={categories}
         renderItem={({ item } ) => <CategoryListItem 
         category={item} 
         onPress={() => navigation.navigate('Category', {title: item.name})} />}
         keyExtractor={(item) => `${item.id}`}  
         contentContainerStyle={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16
  },

  scoll: {
    paddingLeft: 16,
    paddingRight: 16
  }
});
