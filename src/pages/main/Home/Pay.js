import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import SelectableRadioButton from '../../../components/shared/SelectableRadioButton'
import PayForm from '../../../forms/pay/PayForm'
const employeies = [
    {
        id: 0,
        name: "Angel"
    },
    {
        id: 1,
        name: "Clark"
    },
    {
        id: 2,
        name: "Cindy"
    }
]
const Pay = () => {
    return (
        <Container ignorebottom title={"Pay"}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
            <PayForm />
        </Container>
    )
}

export default Pay

const styles = StyleSheet.create({})