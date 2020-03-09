import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Category({ route, navigation }) {

    const { title } = route.params
    navigation.setOptions({
        title: title
    })
    return (
        <View>
            <Text>{title}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Categories')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title='Go to Work' onPress={() => navigation.navigate('Working')} />
        </View>
    );
}

