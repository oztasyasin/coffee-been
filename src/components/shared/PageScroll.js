import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PageScroll = (props) => {
    const { bottom } = useSafeAreaInsets();
    return (
        <ScrollView
            contentContainerStyle={{
                ...styles.frameContent,
                paddingBottom: 70 + bottom,
                ...props.style
            }}
            style={styles.frame}>
            {props.children}
        </ScrollView>
    )
}

export default PageScroll

const styles = StyleSheet.create({
    frameContent: {
        paddingBottom: 70
    }
})