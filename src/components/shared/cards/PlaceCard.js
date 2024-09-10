import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAdaptedWidth } from '../../../helper'
import { Image } from 'expo-image'
import FillGradient from '../FillGradient'
import CustomText from '../CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { themeLight } from '../../../datas/colors'
import { MapPin } from 'phosphor-react-native'

const PlaceCard = (props) => {
    return (
        <TouchableOpacity
            onPress={props.handleCardPress}
            style={styles.frame}>
            <Image
                transition={500}
                style={styles.image}
                source={props.image}
            />
            <FillGradient style={styles.gradient} />
            <View style={styles.contentFrame}>
                <CustomText style={globalStyles.txt5_18_27_036} text={props.name} color={themeLight} />
                <View style={styles.row}>
                    <MapPin size={16} color={themeLight} />
                    <CustomText style={globalStyles.txt5_12_null_24} text={props.name} color={themeLight} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceCard

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        columnGap: 4,
        alignItems: 'center'
    },
    contentFrame: {
        padding: 16,
        rowGap: 6.5
    },
    image: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        zIndex: -1,
        position: 'absolute'
    },
    frame: {
        width: getAdaptedWidth(180),
        aspectRatio: 18 / 22,
        borderRadius: 12,
        justifyContent: 'flex-end'
    },
    gradient: {
        borderRadius: 12,
    }
})