import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Avatar from '../assets/birthday.png'


export default function CategoryListItem(props) {

    const { category, onPress } = props

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.container}>
                <Text style={style.title}>{category.name}</Text>
                <Image style={style.categoryImage} source={Avatar} />
            </View>
        </TouchableOpacity>
    )

}


const style = StyleSheet.create({

    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.3,
        backgroundColor: '#ddd',
        marginBottom: 10
    },

    categoryImage: {
        width: 64,
        height: 64
    },

    title: {
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 8
    }
})