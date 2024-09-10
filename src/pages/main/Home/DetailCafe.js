import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useScrollContext } from '../../../context/ScrollContext';
import TabContainer from '../../../components/shared/TabContainer';
import { fontStyler, globalStyles } from '../../../styles/globalStyles';
import CustomText from '../../../components/shared/CustomText';
import { primary500, secondary300, secondary400, secondary500, themeLight } from '../../../datas/colors';
import { commetsData } from '../../../datas/staticDatas';
import CommentCard from '../../../components/shared/CommentCard';

const DetailCafe = ({ route }) => {
    const { handleScroll } = useScrollContext();
    const { cafe } = route?.params;
    return (
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
                </View>
            </View>
        </TabContainer>
    )
}

export default DetailCafe

const styles = StyleSheet.create({
    commentFrame: {
        rowGap: 12
    },
    reviews: {
        rowGap: 20
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