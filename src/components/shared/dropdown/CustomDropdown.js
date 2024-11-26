import { Animated, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { secondary100, secondary200, secondary300, secondary400, secondary500 } from '../../../datas/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomText from '../CustomText';
import { CaretDown } from 'phosphor-react-native';
import { globalStyles } from '../../../styles/globalStyles';
import { Controller } from 'react-hook-form';
const Option = ({ option, shownProp, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.inputFrame}>
        <Text>
            {option[shownProp]}
        </Text>
    </TouchableOpacity>
)

export const DropdonwField = ({ control, name, rules, error, style, placeholder, options, shownProp, keyProp }) => (
    <Controller
        rules={rules}
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <CustomDropdown
                keyProp={keyProp}
                options={options}
                style={style}
                shownProp={shownProp}
                error={error}
                secureTextEntry={name?.includes('password')}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
    />
);

const CustomDropdown = ({ placeholder, options, shownProp, value, keyProp, onChange }) => {
    const ref = useRef();
    const left = useState(new Animated.Value(-150))[0];

    const handleOpen = () => {
        ref?.current?.open();
    }
    const handleClose = () => {
        ref?.current?.close();
    }

    const changeLabelLeft = (value) => {
        Animated.timing(left, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handleSelect = (item) => {
        handleClose();
        onChange(item.id)
    }

    useEffect(() => {
        value && changeLabelLeft(16);
    }, [value]);

    return (
        <>
            <Pressable onPress={handleOpen} style={styles.inputFrame} >
                <Animated.View style={{ ...styles.placeholder, left }}>
                    <CustomText style={globalStyles.txt4_10_12_012} color={secondary500} text={placeholder} />
                </Animated.View>
                <CustomText style={styles.input} color={value ? secondary500 : secondary300} text={value ? options?.find((obj) => obj[keyProp || 'id'] === value)[shownProp] : placeholder} />
                <CaretDown color={secondary400} size={20} />
            </Pressable>
            <RBSheet
                draggable
                ref={ref}
                height={350}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: 'white',
                        paddingHorizontal: 16
                    },
                    draggableIcon: {
                        backgroundColor: "#E4E4E7"
                    }
                }}>
                <View style={styles.titleFrame} >
                    <CustomText style={globalStyles.txt6_16_24_032} text={placeholder} />
                </View>
                <FlatList
                    data={options}
                    contentContainerStyle={{ rowGap: 8 }}
                    renderItem={({ item }) => (
                        <Option
                            onPress={() => handleSelect(item)}
                            option={item}
                            shownProp={shownProp} />
                    )}
                />
            </RBSheet>
        </>
    )
}

export default CustomDropdown

const styles = StyleSheet.create({
    placeholder: {
        position: 'absolute',
        fontSize: 8,
        fontWeight: '600',
        lineHeight: 10,
        textTransform: 'uppercase',
        top: 4,
    },
    option: {
        width: '100%',
        paddingVertical: 16,
        borderBottomWidth: 1,
    },
    titleFrame: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 12,
        paddingTop: 8
    },
    input: {
        flex: 1,
        color: secondary300,
        fontFamily: 'Urbanist_400Regular',
        letterSpacing: 0.7,
        fontSize: 16,
    },
    bottomsheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 99,
        right: 0
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
    closeButton: {
        padding: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: secondary200,
        marginLeft: 'auto'
    },
    sheetTop: {
        padding: 16,
        paddingTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: secondary200
    },
    backflow: {
        position: 'absolute',
        zIndex: 99,
        width: '100%',
        backgroundColor: 'rgba(18, 18, 18, 0.70)',
        display: 'none',
        ...StyleSheet.absoluteFill
    },
    contentContainer: {
        maxHeight: 740,
        paddingTop: 20,
        rowGap: 20,
    },
})