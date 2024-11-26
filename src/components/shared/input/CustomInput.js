import { Animated, StyleSheet, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CustomText from '../CustomText';
import { globalStyles } from '../../../styles/globalStyles';
import { secondary100, secondary500, primary500, themeRed, secondary300 } from '../../../datas/colors';
import { Controller } from 'react-hook-form';
import { isEmpty } from '../../../helper';
import { fullWidth } from '../../../datas/staticDatas';

export const TextField = ({ control, name, rules, placeholder, error, style }) => (
    <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <CustomInput
                style={style}
                error={error}
                secureTextEntry={name?.includes('password')}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
        )}
    />
);

const CustomInput = ({ error, placeholder, value, onChangeText, secureTextEntry, style }) => {
    const left = useState(new Animated.Value(-150))[0];
    const right = useState(new Animated.Value(-fullWidth))[0];
    const frameRef = useRef();
    const inputRef = useRef();

    const updateFrameStyle = (borderColor) => {
        frameRef.current.setNativeProps({
            style: {
                ...styles.inputFrame,
                borderColor
            },
        });
    };

    const handleFocus = () => {
        changeLabelLeft(16);
        updateFrameStyle(error ? themeRed : primary500);
        changePlaceholder(true);
    };

    const handleBlur = () => {
        if (isEmpty(value)) {
            changeLabelLeft(-150);
        }
        updateFrameStyle(error ? themeRed : secondary100);
        changePlaceholder(!isEmpty(value));
    };

    const changePlaceholder = (hide) => {
        inputRef.current.setNativeProps({
            placeholder: hide ? null : placeholder
        });
    };

    const changeLabelLeft = (value) => {
        Animated.timing(left, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const changeErrorRight = (value) => {
        Animated.timing(right, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        if (value?.length === 1) changeLabelLeft(16);
    }, [value]);

    useEffect(() => {
        isEmpty(error?.message) ? changeErrorRight(-fullWidth) : changeErrorRight(12);
    }, [error]);

    return (
        <View ref={frameRef} style={{ ...styles.inputFrame, borderColor: error ? themeRed : secondary100, ...style }}>
            <Animated.View style={{ ...styles.placeholder, left }}>
                <CustomText style={globalStyles.txt4_10_12_012} color={secondary500} text={placeholder} />
            </Animated.View>
            <TextInput
                ref={inputRef}
                placeholder={placeholder}
                placeholderTextColor={secondary300}
                onFocus={handleFocus}
                onBlur={handleBlur}
                textContentType='oneTimeCode'
                autoCompleteType="off"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
            {error && (
                <Animated.View style={{ ...styles.errorLine, right }}>
                    <CustomText style={globalStyles.txt4_10_12_012} color={themeRed} text={error.message} />
                </Animated.View>
            )}
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    errorLine: {
        position: 'absolute',
        bottom: 2,
        right: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        fontFamily: 'Urbanist_400Regular',
        letterSpacing: 0.7,
        fontSize: 16,
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
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    placeholder: {
        position: 'absolute',
        fontSize: 8,
        fontWeight: '600',
        lineHeight: 10,
        textTransform: 'uppercase',
        top: 4,
    },
});
