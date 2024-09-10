import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { secondary300, secondary500, themeLight } from '../../../datas/colors'
import { Image } from 'expo-image'
import { shadow } from '../../../datas/staticDatas'
import CustomText from '../CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import RatingStars from '../RatingStars'

const PlaceHorizontalCard = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.handleCardPress(props)}
            style={styles.frame}>
            <Image
                source={props.image}
                transition={500}
                style={styles.image}
            />
            <View style={styles.contentFrame}>
                <CustomText style={globalStyles.txt6_16_24_032} color={secondary500} text={props.name} />
                <RatingStars rating={props.rating} />
                <Text
                    style={styles.infoText}
                    numberOfLines={2}>
                    {props.info}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceHorizontalCard

const styles = StyleSheet.create({
    infoText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 19.2,
        letterSpacing: -0.12,
        color: secondary300,
        fontFamily: "PlusJakartaSans_400Regular",
    },
    contentFrame: {
        rowGap: 12,
        flex: 1,
    },
    frame: {
        padding: 8,
        borderRadius: 16,
        backgroundColor: themeLight,
        flexDirection: 'row',
        columnGap: 12,
        paddingRight: 31,
        ...shadow
    },
    image: {
        height: 108,
        width: 84,
        borderRadius: 8
    }
})