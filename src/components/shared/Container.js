import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { bgWhite, secondary500, themeBlackWithOpacity, themeLight } from '../../datas/colors';
import { fullHeight, fullWidth, isIos } from '../../datas/staticDatas';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import CustomText from './CustomText';
import { globalStyles } from '../../styles/globalStyles';

const FullSizeOverLay = () => <View style={styles.fullSizeOverLay} />
const Header = (props) => {
    const { navigate, goBack, canGoBack } = useNavigation();
    const handleBackPress = () => {
        if (canGoBack()) {
            goBack()
        }
    }
    return (
        <View style={{ ...styles.header, paddingHorizontal: props.noph ? 24 : 0 }}>
            <TouchableOpacity onPress={handleBackPress}>
                <ArrowLeft size={24} color={props.lightHeader ? themeLight : secondary500} />
            </TouchableOpacity>
            {
                props.title &&
                <View style={{ ...styles.titleFrame, left: props.noph ? 24 : 0 }}>
                    <CustomText style={globalStyles.txt6_14_21_028} color={props.lightHeader ? themeLight : secondary500} text={props.title} />
                </View>
            }

        </View>
    )
}
const Container = (props) => {
    const { top, bottom } = useSafeAreaInsets();
    const noBototmInsets = bottom === 0;
    const noTopInsets = top <= 20;
    const edges = [!props.ignoretop && 'top', !props.ignorebottom && 'bottom', 'left', 'right'];
    const customStyles = {
        justifyContent: props.center ? 'center' : props.end ? 'flex-end' : 'flex-start',
        paddingBottom: props.pb === 0 ? 0 : props.pb ? props.pb : noBototmInsets ? 40 : 6,
        paddingTop: !props.nopt && noTopInsets ? 10 : 0,
        rowGap: props.rg,
        ...!isIos && { minHeight: fullHeight }
    }

    return (
        <SafeAreaView
            edges={edges}
            style={{
                ...styles.container,
                ...customStyles,
                backgroundColor: props.backgroundColor || bgWhite,
                paddingHorizontal: props.noph ? 0 : 24
            }}>
            {(props.title || props.lightHeader || props.darkHeader) && <Header {...props} />}
            {props.children}
            {props.isLoading && <FullSizeOverLay />}
        </SafeAreaView>
    );
};

export default Container;

const styles = StyleSheet.create({
    titleFrame: {
        position: 'absolute',
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        top: '100%'
    },
    header: {
        width: '100%',
        paddingVertical: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'hellix',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30,
        color: themeLight,
        position: 'absolute',
        marginHorizontal: 'auto',
        width: '100%',
        textAlign: 'center',
        zIndex: -1,
        width: fullWidth
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: themeBlackWithOpacity(0.08),
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#FDF7FD',
    },
    fullSizeOverLay: {
        ...StyleSheet.absoluteFill,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99
    }
});
