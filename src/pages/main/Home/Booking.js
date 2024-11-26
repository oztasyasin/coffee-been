import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BookingForm from '../../../forms/pay/BookingForm'

const Booking = () => {
    return (
        <Container title={"Booking"}>
            <StatusBar barStyle={'dark-content'} />
            <BookingForm />
        </Container>
    )
}

export default Booking

const styles = StyleSheet.create({})