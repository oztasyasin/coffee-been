import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BackHeader from '../../../components/shared/header/BackHeader'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary300, secondary500 } from '../../../datas/colors'
import Register4Form from '../../../forms/auth/register/Register4Form'

const Register4 = ({ navigation }) => {
    const submit = () => navigation.navigate('/register5');
    return (
        <Container>
            <BackHeader />
            <CustomText style={{ ...globalStyles.txt6_24_36_072, marginTop: 16 }} color={secondary500} text={"Create New Account"} />
            <CustomText style={{ ...globalStyles.txt4_14_21_028, marginTop: 8, marginBottom: 40 }} color={secondary300} text={"Input OTP Verfication"} />
            <Register4Form submit={submit} />
        </Container>
    )
}

export default Register4

const styles = StyleSheet.create({})