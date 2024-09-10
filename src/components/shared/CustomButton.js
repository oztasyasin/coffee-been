import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { secondary100, primary500, themeLight } from '../../datas/colors'
import CustomText from './CustomText'
import { globalStyles } from '../../styles/globalStyles'

const CustomButton = ({ onPress, style, color, icon, text, textColor, withBorder, mt }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...styles.frame, marginTop: mt, backgroundColor: color || primary500, ...style, ...withBorder && { borderWidth: 1, borderColor: secondary100 } }}>
            {icon}
            <CustomText style={globalStyles.txt6_16_24_032} text={text} color={textColor || themeLight} />
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 60,
        minHeight: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    }
})