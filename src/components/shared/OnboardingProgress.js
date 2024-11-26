import { StyleSheet, View } from 'react-native'
import React from 'react'
import { primary500, themeLight } from '../../datas/colors'

const OnboardingProgress = ({ max, step }) => {
    return (
        <View style={styles.frame}>
            {Array.from({ length: step })?.map((val, i) => (<View key={i} style={{ ...styles.steps, backgroundColor: primary500 }} />))}
            {Array.from({ length: max - step })?.map((val, i) => (<View key={i} style={{ ...styles.steps, opacity: 0.5 }} />))}
        </View>
    )
}

export default OnboardingProgress

const styles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
        columnGap: 13.77,
        marginBottom:46
    },
    steps: {
        flex: 1,
        height: 2,
        backgroundColor: themeLight
    }
})