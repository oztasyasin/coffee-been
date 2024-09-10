import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
const CustomText = ({ text, notranslate, style, color, mh, after, replaceText }) => {
    const { t } = useTranslation();
    const useableText = replaceText ? text?.replace('*', replaceText) : text;
    return (
        <Text style={{ ...style, color: color, marginHorizontal: mh }}>{notranslate ? useableText : t(useableText)}{after}</Text>
    )
}

export default CustomText