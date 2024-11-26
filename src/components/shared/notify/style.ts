import { StyleSheet } from "react-native";
import { fullWidth, shadow } from "../../../datas/staticDatas";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 100,
        zIndex: 99,
        paddingHorizontal: 24
    },
    frame: {
        height: 80,
        backgroundColor: 'white',
        ...shadow,
        shadowColor: 'rgba(0,0,0,0.9)',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        columnGap: 8
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 8
    },
    contentFrame: {
        flex: 1,
        paddingVertical: 8,
        justifyContent: 'center',
    },
    name: {
        fontSize: 22,
        fontFamily: 'Urbanist_600SemiBold',
        letterSpacing: -0.18
    },
    description: {
        fontSize: 16,
        letterSpacing: -0.1,
        fontFamily: 'Urbanist_300Light',
        opacity: 0.5
    },
    buttons: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06D001'
    }
})