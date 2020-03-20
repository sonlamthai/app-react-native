import React from 'react'
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import man from '../assets/man.png'


export default function ProductListItem(props) {
    const { product } = props

    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={product.images[0].url} />
                </View>
                <View style={styles.nameProduct}>
                    <Text>{product.name}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.price}>{product.price}</Text>
                    <TouchableOpacity activeOpacity={0.4}>
                        <Text style={styles.buy} >Mua +</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: "hidden",
        alignItems: "center"

    },
    image: {

    },
    nameProduct: {

    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        flex: 1
    },
    buy: {
        color: '#4EBDAD',
        textTransform: 'uppercase',
        fontSize: 16
    }
})
