import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'phosphor-react-native'
import { secondary500 } from '../../../datas/colors'
import { useNavigation } from '@react-navigation/native'

const BackHeader = (props) => {
    const { canGoBack, goBack } = useNavigation();
    const backPress = () => {
        const backState = canGoBack();
        backState && goBack();
    }
    return (
        <View style={styles.frame}>
            <TouchableOpacity onPress={backPress}>
                <ArrowLeft color={secondary500} size={24} weight='bold' />
            </TouchableOpacity>
        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 24,
    }
})