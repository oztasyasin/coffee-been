import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Star } from 'phosphor-react-native'
import { secondary200 } from '../../datas/colors';
import CustomText from './CustomText';
import { globalStyles } from '../../styles/globalStyles';

const RatingStars = (props) => {
    const intRate = Math.floor(props.rating)

    return (
        <View style={styles.frame}>
            <View style={styles.starFrame}>
                {Array.from({ length: intRate })?.map((item, i) => <Star key={i} weight='fill' size={12} color='#FFC73A' />)}
                {Array.from({ length: 5 - intRate })?.map((item, i) => <Star key={i} weight='fill' size={12} color={secondary200} />)}
            </View>
            {!props.nonumber && <CustomText style={globalStyles.txt5_12_null_24} text={props.rating} />}
        </View>
    )
}

export default RatingStars

const styles = StyleSheet.create({
    starFrame: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4
    },
    frame: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4
    }
})