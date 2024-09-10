import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SectionContainer from '../../components/shared/SectionContainer'
import CustomText from '../../components/shared/CustomText'
import { primary500, secondary500 } from '../../datas/colors'
import { globalStyles } from '../../styles/globalStyles'
import PlaceCard from '../../components/shared/cards/PlaceCard'
import { placesData } from '../../datas/staticDatas'

const PlacesSection = ({ handleCardPress }) => {
    return (
        <SectionContainer mt={24}>
            <View style={{ ...globalStyles.fullsize_row, justifyContent: 'space-between', paddingHorizontal: 24 }}>
                <CustomText text={"Favorite Place"} color={secondary500} style={globalStyles.txt6_16_24_032} />
                <TouchableOpacity style={{ paddingLeft: 24 }}>
                    <CustomText text={"View All"} color={primary500} style={globalStyles.txt5_12_null_24} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 20,
                    paddingLeft: 24,
                    paddingRight: 24
                }}
                data={placesData}
                horizontal
                renderItem={({ item }) => <PlaceCard handleCardPress={() => handleCardPress(item)} {...item} />}
            />
        </SectionContainer>
    )
}

export default PlacesSection

const styles = StyleSheet.create({})