import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { shadow } from '../../../datas/staticDatas'
import { Image } from 'expo-image'
import { primary500, secondary400, themeLight } from '../../../datas/colors'
import { fontStyler, globalStyles } from '../../../styles/globalStyles'
import { formatPrice } from '../../../helper'

const ProductCard = (props) => {
    return (
        <TouchableOpacity
            onPress={props.addToCart}
            style={styles.frame}>
            <Image
                source={props.image}
                style={styles.image}
            />
            <View style={styles.contentFrame}>
                <Text style={fontStyler(500, 14, 21, -0.28, "jakarta", props.count ? primary500 : secondary400)}>{props.name}</Text>
                <View style={globalStyles.fullsize_row}>
                    <Text style={{ ...fontStyler(600, 16, 24, -0.32, "jakarta", primary500) }}>{formatPrice(props.price)}</Text>
                    {props.count &&
                        <Text style={{ ...fontStyler(600, 16, 24, -0.32, "jakarta", primary500), marginLeft: 'auto' }}>
                            {`X ${props.count}`}
                        </Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    contentFrame: {
        flex: 1,
        rowGap: 4,
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 30,
    },
    frame: {
        width: '100%',
        height: 100,
        borderRadius: 16,
        paddingLeft: 16,
        paddingVertical: 20,
        columnGap: 12,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        ...shadow,
        backgroundColor: themeLight
    }
})