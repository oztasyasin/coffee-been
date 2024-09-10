import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomText from '../CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary100, secondary500, seconDaryText, primary500, themeRed } from '../../../datas/colors'
import { Controller } from 'react-hook-form'
import { isEmpty } from '../../../helper'

export const TextField = ({ control, name, rules, placeholder, error }) => (
    <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
                error={error}
                secureTextEntry={name?.includes('password')}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
        )}
    />
)

const CustomInput = (props) => {
    const left = useState(new Animated.Value(-150))[0];
    const frameRef = useRef();
    const handleFocus = () => {
        frameRef.current.setNativeProps({
            style: {
                ...styles.inputFrame,
                borderColor: props?.error ? themeRed : primary500
            }
        })
    }
    const handleBlur = () => {
        frameRef.current.setNativeProps({
            style: {
                ...styles.inputFrame,
                borderColor: props?.error ? themeRed : secondary100
            }
        })
    }
    const showSmallText = (e) => {
        if (isEmpty(e)) {
            const toValue = -150;
            Animated.timing(left, {
                toValue,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        else if (e.length === 1) {
            const toValue = 16;
            Animated.timing(left, {
                toValue,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    }
    useEffect(() => {
        showSmallText(props.value)
    }, [props.value])

    return (
        <View ref={frameRef} style={{ ...styles.inputFrame, ...props?.error && { borderColor: themeRed } }}>
            <Animated.View style={{ ...styles.placeholder, left: left }}>
                <CustomText style={globalStyles.txt4_10_12_012} color={secondary500} text={props.placeholder} />
            </Animated.View>
            <TextInput
                placeholder={props.placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                textContentType='oneTimeCode'
                autoCompleteType="off"
                autoCorrect={false}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                style={styles.input}
            />
            <CustomText style={{ ...globalStyles.txt4_10_12_012, ...styles.errorLine }} color={themeRed} text={props?.error?.message} />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    errorLine: {
        position: 'absolute',
        bottom: 2,
        right: 10
    },
    container: {
        rowGap: 12,
        width: '100%',
    },
    input: {
        flex: 1,
        height: '100%',
        fontFamily: 'Urbanist_400Regular',
        letterSpacing: 0.7,
        fontSize: 16
    },
    inputFrame: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: secondary100,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.01)'
    },
    placeholder: {
        position: 'absolute',
        fontSize: 8,
        fontWeight: '600',
        lineHeight: 10,
        textTransform: 'uppercase',
        top: 4,
    },
})