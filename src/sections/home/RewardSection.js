import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionContainer from '../../components/shared/SectionContainer'
import { globalStyles } from '../../styles/globalStyles'
import CustomText from '../../components/shared/CustomText'
import { primary500, secondary500 } from '../../datas/colors'
import PromoCards from '../../components/shared/cards/PromoCards'
import { promoData } from '../../datas/staticDatas'
const RewardSection = () => {
    return (
        <SectionContainer mt={24} ph={24}>
            <View style={{ ...globalStyles.fullsize_row, justifyContent: 'space-between' }}>
                <CustomText text={"My Reward"} color={secondary500} style={globalStyles.txt6_16_24_032} />
                <TouchableOpacity style={{ paddingLeft: 24 }}>
                    <CustomText text={"View All"} color={primary500} style={globalStyles.txt5_12_null_24} />
                </TouchableOpacity>
            </View>
            <PromoCards {...promoData[0]} />
        </SectionContainer>
    )
}

export default RewardSection

const styles = StyleSheet.create({

})