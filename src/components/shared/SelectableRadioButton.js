import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { globalStyles } from '../../styles/globalStyles'
import { primary500, secondary100, secondary500, themeLight } from '../../datas/colors'
import { CheckCircle, XCircle } from 'phosphor-react-native'
import { fullWidth } from '../../datas/staticDatas'

const SelectableRadioButton = (props) => {
    const cutsomStyles = {
        backgroundColor: props.isSelected ? primary500 : 'transparent',
        borderColor: props.isSelected ? primary500 : secondary100,
    }
    const iconProps = {
        size: 16,
        color: props.isSelected ? themeLight : secondary500
    }
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...styles.frame, ...cutsomStyles }}>
            <View style={styles.circle} />
            <CustomText text={props.name} style={{ ...globalStyles.txt5_16_24_032, flex: 1 }} color={props.isSelected ? themeLight : secondary500} />
            {props.isSelected ? <XCircle {...iconProps} /> : <CheckCircle  {...iconProps} />}
        </TouchableOpacity>
    )
}

export default SelectableRadioButton

const styles = StyleSheet.create({
    iconFrame: {

    },
    circle: {
        borderWidth: 1.5,
        borderColor: themeLight,
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: "#D9D9D9"
    },
    frame: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: primary500,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        flex: 1,
        maxHeight: 48,
        maxWidth: (fullWidth - 64) / 2,
        minWidth: (fullWidth - 64) / 2,
    }
})