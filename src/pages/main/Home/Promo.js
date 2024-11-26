import { FlatList, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary500, themeLight } from '../../../datas/colors'
import { fullWidth, promoData, promoGroups } from '../../../datas/staticDatas'
import PromoCards from '../../../components/shared/cards/PromoCards'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Promo = () => {
    const { bottom } = useSafeAreaInsets();
    return (
        <Container pb={0} ignorebottom title={"Promo"}>
            <StatusBar barStyle={'dark-content'} />
            <SectionList
                style={{ minWidth: fullWidth, left: -24, paddingHorizontal: 24, }}
                sections={promoGroups}
                contentContainerStyle={{ rowGap: 16, paddingBottom: bottom + 16 }}
                renderItem={({ item }) => <PromoCards {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{ width: fullWidth, left: -24, paddingLeft: 24, backgroundColor: "#FCFCFD" }}>
                        <CustomText style={{ ...globalStyles.txt6_16_24_032 }} color={secondary500} text={title} />
                    </View>)}
            />
        </Container>
    )
}

export default Promo

const styles = StyleSheet.create({})