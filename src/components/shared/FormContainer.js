import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { isIos } from '../../datas/staticDatas'

const FormContainer = (props) => {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{
                    ...styles.formArea,
                    justifyContent: props.end ? 'flex-end' : props.split ? 'space-between' : 'flex-start',
                    paddingHorizontal: props.ph,
                    rowGap: props.rowGap || 12
                }}
                keyboardVerticalOffset={isIos ? 16 : 32}
                behavior={isIos ? 'padding' : 'height'}
            >
                {props.children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default FormContainer

const styles = StyleSheet.create({
    formArea: {
        flex: 1
    }
})