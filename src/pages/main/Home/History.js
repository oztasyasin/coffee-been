import { FlatList, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary500, themeLight } from '../../../datas/colors'
import { fullWidth, historyGroups, promoData, promoGroups } from '../../../datas/staticDatas'
import PromoCards from '../../../components/shared/cards/PromoCards'
import HistoryCard from '../../../components/shared/cards/HistoryCard'

const History = () => {
    return (
        <Container ignorebottom title={"History"}>
            <StatusBar barStyle={'dark-content'} />
            <SectionList
                style={{ minWidth: fullWidth, left: -24, paddingHorizontal: 24, }}
                sections={historyGroups}
                contentContainerStyle={{ rowGap: 16 }}
                renderItem={({ item }) => <HistoryCard {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={{ width: fullWidth, left: -24, paddingLeft: 24, backgroundColor: "#FCFCFD" }}>
                        <CustomText style={{ ...globalStyles.txt6_16_24_032 }} color={secondary500} text={title} />
                    </View>)}
            />
        </Container>
    )
}

export default History

const styles = StyleSheet.create({})