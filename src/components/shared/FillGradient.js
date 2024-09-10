import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
const FillGradient = (props) => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <LinearGradient
                colors={['rgba(19,19,19,0)', 'rgba(19,19,19,1)']}
                start={{ x: 0.5, y: -0.1 }}
                end={{ x: 0.5, y: 0.9 }}
                style={{
                    ...styles.background,
                    ...props.style
                }}
            />
        </>
    )
}

export default FillGradient

const styles = StyleSheet.create({
    background: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        zIndex: -1
    }
})