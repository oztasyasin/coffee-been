import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomText from './CustomText'
import { globalStyles } from '../../styles/globalStyles'
import { secondary300 } from '../../datas/colors'

const Splitter = (props) => {
    return (
        <View style={{ ...styles.frame, marginTop: props.mt, marginBottom: props.mb }}>
            <LinearGradient
                colors={['rgba(184, 184, 184, 0.32)', 'rgba(184, 184, 184, 0.00)']}
                start={{ x: 1, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.rightHr}
            />
            <CustomText text={props.text} style={globalStyles.txt5_14_21_028} color={secondary300} />
            <LinearGradient
                colors={['rgba(184, 184, 184, 0.32)', 'rgba(184, 184, 184, 0.00)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.rightHr}
            />
        </View>
    )
}

export default Splitter

const styles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 16
    },
    rightHr: {
        flex: 1,
        height: 1,
    }
})