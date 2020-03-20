import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ProductListItem from '../components/ProductListItem'
import jar from '../assets/jar.png'

export default function Category({ route, navigation }) {

    const { title } = route.params
    navigation.setOptions({
        title: title
    })

    const [state, setState] = useState({
        products: [
            {
                id: 1,
                images: [
                    {
                        url: jar
                    }
                ],
                name: 'Cho dep',
                price: '10000000'
            },
            {
                id: 2,
                images: [
                    {
                        url: jar
                    }
                ],
                name: 'Cun de thuong',
                price: '50000000'
            }
        ]
    })
    return (
        <View>
            <Text>{title}</Text>

            <FlatList data={state.products}
                horizontal={true}
                renderItem={({ item }) => <ProductListItem product={item} />}
                keyExtractor={(item) => `${item.id}`}
            />


            <Button title="Go to Home" onPress={() => navigation.navigate('Categories')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title='Go to Work' onPress={() => navigation.navigate('Working')} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
