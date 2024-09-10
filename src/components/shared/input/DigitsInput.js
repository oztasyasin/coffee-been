import { StyleSheet, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { secondary100, primary500 } from '../../../datas/colors';
import { isEmpty } from '../../../helper';
export const DigitsArea = ({ control, name, rules, placeholder, type, error, customFunc }) => {
    return (
        <View>
            <Controller
                rules={rules}
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <DigitsInput
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
        </View>
    );
};

const DigitsInput = (props) => {
    const [values, setValues] = useState(Array(4).fill(''));
    const refs = Array.from({ length: 4 }, () => useRef());
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && values[index] === '' && index !== 0) {
            refs[index - 1].current.focus();
        }
    };
    const handleChange = (index, value) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        props.onChangeText(newValues.join(''));

        if (!isEmpty(value) && index < refs.length - 1) {
            refs[index + 1].current.focus();
        } else if (isEmpty(value) && index > 0) {
            refs[index - 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            {refs.map((ref, index) => (
                <TextInput
                    key={index}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    onFocus={() => ref.current.setNativeProps({
                        style: {
                            ...styles.inputs,
                            borderColor: primary500
                        }
                    })}
                    onBlur={() => ref.current.setNativeProps({
                        style: {
                            ...styles.inputs,
                            borderColor: values[index] ? primary500 : secondary100
                        }
                    })}
                    ref={ref}
                    value={values[index]}
                    maxLength={1}
                    onChangeText={(value) => handleChange(index, value)}
                    style={{
                        ...styles.inputs,
                        ...values[index] && { borderColor: primary500 }
                    }}
                    keyboardType="number-pad"
                />
            ))}
        </View>
    );
};

export default DigitsInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 64,
        columnGap: 10,
        minHeight: 64,
        maxHeight: 64,
        width: '100%',
    },
    inputs: {
        height: '100%',
        flex: 1,
        borderRadius: 16,
        borderWidth: 1.5,
        backgroundColor: 'white',
        borderColor: secondary100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
