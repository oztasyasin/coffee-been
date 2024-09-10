import { Coffee, CoffeeBean, House, Tag, User } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { secondary300, primary500, themeLight } from "../../datas/colors";
import { fullWidth } from "../../datas/staticDatas";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const getIconProps = (isFocused) => {
    return {
        color: isFocused ? primary500 : secondary300,
        weight: isFocused ? 'fill' : 'bold',
        size: 24
    }
}
const iconMap = {
    "Home": (isFocused) => <House {...getIconProps(isFocused)} />,
    "Coffee": (isFocused) => <Coffee {...getIconProps(isFocused)} />,
    "Reward": (isFocused) => <Tag {...getIconProps(isFocused)} />,
    "Profile": (isFocused) => <User {...getIconProps(isFocused)} />
}
const Tab = ({ route, index, state, descriptors, navigation }) => {
    const { t } = useTranslation();
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
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    return (
        <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabs}
        >
            {iconMap[label](isFocused)}
        </TouchableOpacity>
    );
}
const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { bottom } = useSafeAreaInsets();
    return (
        <View style={{ ...styles.frame, paddingBottom: 24 + bottom }}>
            {state.routes.map((route, index) =>
                <Tab
                    key={index}
                    navigation={navigation}
                    state={state}
                    descriptors={descriptors}
                    index={index}
                    route={route} />)}
        </View>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingTop: 24,
        left: 0,
        width: fullWidth,
        backgroundColor: themeLight,
    },
    tabs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})