import { Animated, Pressable, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { customInputStyles, errorColor } from './styles'
import { CustomTimePickerProps } from './props'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CalendarDots } from "phosphor-react-native";
import { fullWidth } from '../../../../datas/staticDatas'
import { primary500, secondary300, secondary400, secondary500 } from '../../../../datas/colors';
import { formatDate, isEmpty } from '../../../../helper';
const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
    error,
    containerStyle,
    labelStyle,
    minimumDate,
    mode,
    maximumDate,
    errorTextStyle,
    onTimeChange,
    ...restProps }) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState<boolean>(false);
    const left = useState<Animated.Value>(new Animated.Value(-150))[0];
    const right = useState<Animated.Value>(new Animated.Value(-fullWidth))[0];
    const errorTextStypeProps = StyleSheet.flatten(errorTextStyle);
    const baseErrorColor = errorTextStypeProps?.color ? errorTextStypeProps.color.toString() : errorColor;

    const changeLabelLeft = (value: number) => {
        Animated.timing(left, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const changeErrorRight = (value: number) => {
        Animated.timing(right, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const closeModal = () => setIsDatePickerVisible(() => { return false });

    const openModal = () => setIsDatePickerVisible(() => { return true });

    const handleConfirm = (e: Date) => {
        if (onTimeChange) {
            if (mode !== 'time') {
                onTimeChange(e.toISOString()?.split('T')[0])
            }
            else {
                const timeParts = e.toISOString()?.split('T')[1]?.split(':');
                const time = `${timeParts[0]}:${timeParts[1]}`
                onTimeChange(time)
            }
        }
        closeModal();
    }

    useEffect(() => {
        !isEmpty(restProps.value) && changeLabelLeft(16);
    }, [restProps.value]);

    useEffect(() => {
        isEmpty(error) ? changeErrorRight(-fullWidth) : changeErrorRight(12);
    }, [error]);

    return (
        <>
            <Pressable
                onPress={openModal}
                style={[{ ...customInputStyles.inputFrame, ...error && { borderColor: baseErrorColor } }, containerStyle]}>
                <Animated.View style={{ ...customInputStyles.placeholder, left }}>
                    <Text style={[customInputStyles.label, labelStyle]}>
                        {restProps.placeholder}
                    </Text>
                </Animated.View>
                <Text style={{ ...customInputStyles.input, height: 'auto', color: restProps.value ? secondary500 : secondary300 }}>{mode !== 'time' ? (formatDate(restProps?.value) || restProps.placeholder) : (restProps.value || restProps.placeholder)}</Text>
                {error && (
                    <Animated.View style={{ ...customInputStyles.errorLine, right }}>
                        <Text style={[customInputStyles.errorText, errorTextStyle]}>{error.message}</Text>
                    </Animated.View>
                )}
                <CalendarDots color={secondary400} />
            </Pressable>
            <DateTimePickerModal
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                isVisible={isDatePickerVisible}
                mode={mode || 'date'}
                accessibilityIgnoresInvertColors={true}
                themeVariant='light'
                backdropStyleIOS={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                textColor={secondary500}
                buttonTextColorIOS={primary500}
                accentColor={secondary300}
                onConfirm={handleConfirm}
                onCancel={closeModal}
            />
        </>
    )
}

export default CustomTimePicker
