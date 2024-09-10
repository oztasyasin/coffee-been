import { Animated, View, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { primary500, secondary300 } from '../../datas/colors';
import { fullWidth } from '../../datas/staticDatas';

function CustomHorizontalBar({ state, descriptors, navigation, position }) {
    return (
        <>
            <View style={{ zIndex: -1, height: 56 }}>

            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
                    });

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabs}
                        >
                            <Animated.Text style={{ ...globalStyles.txt5_14_21_028, color: primary500, opacity }}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
                <Animated.View
                    style={[
                        styles.selectionIndicator,
                        {
                            transform: [
                                {
                                    translateX: position.interpolate({
                                        inputRange: state.routes.map((_, i) => i),
                                        outputRange: state.routes.map((_, i) => i !== 0 ? (fullWidth - 48) / 2 : 0)
                                    })
                                }
                            ],
                            width: (fullWidth - 48) / 2,
                        },
                    ]}
                />
            </View>
        </>

    );
}

export default CustomHorizontalBar;

const styles = StyleSheet.create({
    selectionIndicator: {
        position: 'absolute',
        bottom: 0,
        height: 1,
        backgroundColor: primary500,
    },
    tabs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 12,
        marginTop: 24
    }
})