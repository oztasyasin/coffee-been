import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import CustomText from './CustomText'
import { secondary300, secondary400, secondary500 } from '../../datas/colors'
import { globalStyles } from '../../styles/globalStyles'
import RatingStars from './RatingStars'

const CommentCard = (props) => {
    return (
        <View style={styles.frame}>
            <Image
                style={styles.image}
                source={props.image}
            />
            <View style={styles.contentFrame}>
                <View style={styles.commentTop}>
                    <View style={styles.commentLeft}>
                        <CustomText style={globalStyles.txt6_16_24_032} color={secondary500} text={props.name} />
                        <CustomText style={globalStyles.txt5_12_null_24} color={secondary300} text={props.title} />
                    </View>
                    <View style={styles.commentRight}>
                        <CustomText style={globalStyles.txt5_12_null_24} color={secondary300} text={props.date} />
                        <RatingStars rating={props.rating} nonumber />
                    </View>
                </View>
                <Text
                    numberOfLines={2}
                    style={styles.comment}>
                    {props.comment}
                </Text>
            </View>
        </View>
    )
}

export default CommentCard

const styles = StyleSheet.create({
    comment: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 24,
        color: secondary400,
        fontFamily: "PlusJakartaSans_400Regular"
    },
    commentRight: {
        paddingTop: 4,
        height: '100%',
        alignItems: 'flex-end',
        rowGap: 8
    },
    commentLeft: {
        rowGap: 2
    },
    commentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    frame: {
        flexDirection: 'row',
        columnGap: 12
    },
    contentFrame: {
        flex: 1,
        rowGap: 16,
    }
})