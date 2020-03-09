import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Working({ navigation }) {
    return (
        <View>
            <Text>Working</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Categories')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

