import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useScrollContext } from '../../../context/ScrollContext';
import TabContainer from '../../../components/shared/TabContainer';
import { fontStyler, globalStyles } from '../../../styles/globalStyles';
import CustomText from '../../../components/shared/CustomText';
import { primary500, secondary300, secondary400, secondary500, themeLight } from '../../../datas/colors';
import { commetsData, fullWidth, isIos } from '../../../datas/staticDatas';
import CommentCard from '../../../components/shared/CommentCard';
import { CaretDown } from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomButton from '../../../components/shared/CustomButton';
import { formatPrice } from '../../../helper';

const DetailCafe = ({ route, navigation }) => {
    const { handleScroll } = useScrollContext();
    const { bottom } = useSafeAreaInsets();
    const { cafe } = route?.params;
    return (
        <>
            <TabContainer gap={24} handleScroll={handleScroll}>
                <View style={styles.remainingFrame}>
                    <CustomText text={"Capacity"} style={globalStyles.txt5_12_null_24} color={secondary300} />
                    <View style={styles.remaining}>
                        <CustomText text={"7 Remaining"} color={themeLight} style={fontStyler(600, 12, null, -0.24, "jakarta")} />
                    </View>
                </View>
                <View style={styles.description}>
                    <CustomText text={"Description"} style={globalStyles.txt6_16_24_032} color={secondary500} />
                    <CustomText text={cafe?.info} style={globalStyles.txt4_12_24_null} color={secondary400} />
                </View>
                <View style={styles.commentFrame}>
                    <View style={styles.reviewTopFrame}>
                        <CustomText text={"Review"} style={globalStyles.txt6_16_24_032} color={secondary500} />
                        <View style={styles.remaining}>
                            <CustomText text={"13"} color={themeLight} style={fontStyler(600, 12, null, -0.24, "jakarta")} />
                        </View>
                    </View>
                    <View style={styles.reviews}>
                        {commetsData?.map((item) => <CommentCard {...item} />)}
                        <TouchableOpacity style={styles.showAllLink}>
                            <CustomText text={"Show All"} style={globalStyles.txt6_16_24_032} color={secondary300} />
                            <CaretDown size={14} weight='bold' color={secondary300} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TabContainer>
            <View style={{ ...styles.bottomFrame, paddingBottom: 24 + bottom }}>
                <CustomText style={fontStyler(600, 20, 30, -0.4, "jakarta", primary500)} color={primary500} text={formatPrice(100)} />
                <CustomText style={fontStyler(500, 14, 21, -0.28, "jakarta")} color={secondary300} text={"/Hour"} />
                <TouchableOpacity onPress={() => navigation.navigate('/booking')} style={styles.buttonFrame}>
                    <CustomText style={fontStyler(600, 16, 24, -0.32, "jakarta")} color={themeLight} text={"Book Now"} />
                </TouchableOpacity>
            </View>
        </>

    )
}

export default DetailCafe

const styles = StyleSheet.create({
    buttonFrame: {
        height: 54,
        borderRadius: 16,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary500,
        marginLeft: 'auto',
    },
    bottomFrame: {
        columnGap: 4,
        minWidth: fullWidth,
        position: 'absolute',
        bottom: 0,
        padding: 24,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: themeLight,
        zIndex: 6
    },
    showAllLink: {
        paddingVertical: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 8,
        paddingBottom: isIos ? 170 : 150
    },
    commentFrame: {
        rowGap: 12
    },
    reviews: {
        rowGap: 20,
        alignItems: 'center'
    },
    reviewTopFrame: {
        flexDirection: 'row',
        columnGap: 12
    },
    description: {
        rowGap: 12
    },
    remaining: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: primary500
    },
    remainingFrame: {
        width: '100%',
        paddingTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})