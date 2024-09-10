import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BackHeader from '../../../components/shared/header/BackHeader'
import ForgotPasswordForm from '../../../forms/auth/login/ForgotPasswordForm'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary300, secondary500 } from '../../../datas/colors'
import CustomText from '../../../components/shared/CustomText'

const ForgotPassword = ({ navigation }) => {
    const submit = data => navigation.navigate('/createNewPassword');
    return (
        <Container>
            <BackHeader />
            <CustomText style={{ ...globalStyles.txt6_24_36_072, marginTop: 16 }} color={secondary500} text={"Forgot Your Password?"} />
            <CustomText style={{ ...globalStyles.txt4_14_21_028, marginTop: 8, marginBottom: 40 }} color={secondary300} text={"Input Your Email"} />
            <ForgotPasswordForm submit={submit} />
        </Container>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})