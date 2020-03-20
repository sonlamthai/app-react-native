import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import Categories from './Categories';
import Category from './Category'
import Working from './Working'

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Working" component={Working} />
        </Stack.Navigator>
    );
}