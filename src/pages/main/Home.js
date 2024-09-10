import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../components/shared/Container'
import BalanceSection from '../../sections/home/BalanceSection'
import { primary500 } from '../../datas/colors'
import RewardSection from '../../sections/home/RewardSection'
import PlacesSection from '../../sections/home/PlacesSection'
import PageScroll from '../../components/shared/PageScroll'
import PopularPlacesSection from '../../sections/home/PopularPlacesSection'

const Home = ({ navigation }) => {
    const handleCardPress = (data) => navigation?.navigate('/coverPlace', { cafe: data });
    return (
        <Container nopt noph ignoretop>
            <StatusBar backgroundColor={primary500} barStyle={'light-content'} />
            <BalanceSection />
            <PageScroll style={styles.pageScroll} >
                <RewardSection />
                <PlacesSection handleCardPress={handleCardPress} />
                <PopularPlacesSection handleCardPress={handleCardPress} />
            </PageScroll>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    pageScroll: {
        paddingTop: 94
    }
})