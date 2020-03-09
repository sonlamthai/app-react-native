import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Categories from './screens/Categories';
import Category from './screens/Category'
import Working from './screens/Working'


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Working" component={Working} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}