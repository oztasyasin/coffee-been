import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { primary500, secondary100, secondary500 } from '../../datas/colors';
import { Circle, RadioButton } from 'phosphor-react-native';
import CustomText from './CustomText';
import { globalStyles } from '../../styles/globalStyles';

const AnimatedExtendFrame = (props) => {
    const { extendedHeight, isSelected, onPress, text, content } = props;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(isSelected ? extendedHeight : 52, { duration: 300 }),
            overflow: 'hidden',
        };
    });

    return (
        <Animated.View style={[styles.frame, animatedStyle]}>
            <TouchableOpacity onPress={onPress} style={styles.touchFrame}>
                {isSelected ? <RadioButton size={16} weight='fill' color={primary500} /> : <Circle size={16} />}
                <CustomText text={text} style={styles.text} color={secondary500} />
            </TouchableOpacity>
            {content}
        </Animated.View>
    );
};

export default AnimatedExtendFrame;

const styles = StyleSheet.create({
    text: {
        ...globalStyles.txt6_14_21_028,
        lineHeight: 16.5,
    },
    touchFrame: {
        width: '100%',
        paddingVertical: 18,
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    frame: {
        borderRadius: 10,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: secondary100,
    },
});
