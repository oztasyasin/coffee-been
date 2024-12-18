import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WarningCircle, CheckCircle } from 'phosphor-react-native'
const themeBlack = "black"
const fullWidth = Dimensions.get('window').width;
const toasterColorMap = {
    "success": 'green',
    "error": 'red'
}
const iconProps = {
    size: 24,
    color: 'white',
    weight: 'bold'
}
const iconMap = {
    "success": <CheckCircle {...iconProps} />,
    "error": <WarningCircle {...iconProps} />
}
const CustomToaster = (props) => {
    return (
        <View style={styles.container}>
            <View style={{
                ...styles.frame,
            }}>
                <View style={{
                    ...styles.leftArea,
                    backgroundColor: toasterColorMap[props.type]
                }}>
                    {iconMap[props.type]}
                </View>
                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 19.12,
                        maxWidth: fullWidth - 32 - 60 - 24,
                        marginLeft: 12,
                        color: themeBlack
                    }} >
                    {props.text2}
                </Text>
            </View>
        </View >
    )
}

export default CustomToaster

const styles = StyleSheet.create({
    leftArea: {
        height: '100%',
        aspectRatio: 1,
        backgroundColor: 'grey',
        borderRadius: 20,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        flex: 1,
        width: fullWidth - 32,
        height: '100%',
    },
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    frame: {
        width: '100%',
        borderRadius: 20,
        borderBottomLeftRadius: 8,
        backgroundColor: 'white',
        height: 60,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})