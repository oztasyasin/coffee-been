import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { primary500, secondary100, secondary500, themeLight } from '../../datas/colors'
import { fontStyler } from '../../styles/globalStyles'
const customStyles = {
    selected: {
        borderWidth: 1,
        borderColor: primary500,
        backgroundColor: primary500,
    },
    default: {
        borderWidth: 1,
        borderColor: secondary100,
        backgroundColor: 'transparent'
    }
}
const SelectAbleBugged = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...styles.frame, ...customStyles[props.isSelected ? 'selected' : 'default'] }}>
            <Text style={fontStyler(600, 12, null, -0.24, "jakarta", props.isSelected ? themeLight : secondary500)}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default SelectAbleBugged

const styles = StyleSheet.create({
    frame: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 16,
    }
})