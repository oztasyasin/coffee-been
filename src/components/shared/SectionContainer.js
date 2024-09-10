import { StyleSheet, View } from 'react-native'
import React from 'react'

const SectionContainer = (props) => {
    return (
        <View style={{ ...styles.frame, paddingHorizontal: props.ph, marginTop: props.mt }}>
            {props.children}
        </View>
    )
}

export default SectionContainer

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        rowGap: 16
    }
})