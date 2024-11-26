import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Container from '../../../components/shared/Container'
import TopupFrom from '../../../forms/pay/TopupFrom'

const TopUp = () => {
    return (
        <Container title={"Top Up"}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
            <TopupFrom/>
        </Container>
    )
}

export default TopUp
