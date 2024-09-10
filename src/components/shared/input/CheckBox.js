import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CheckSquare, Square } from 'phosphor-react-native'
import { secondary200, primary500 } from '../../../datas/colors'
import { Controller } from 'react-hook-form'

export const CheckField = ({ control, name, rules }) => (
    <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <CheckBox
                value={value}
                onChange={onChange}
            />
        )}
    />
)

const CheckBox = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onChange(!props.value)}>
            {props.value ? <CheckSquare size={24} weight="fill" color={primary500} /> : <Square size={24} color={secondary200} />}
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({})