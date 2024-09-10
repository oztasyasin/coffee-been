import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BackHeader from '../../../components/shared/header/BackHeader'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary300, secondary500 } from '../../../datas/colors'
import Register2Form from '../../../forms/auth/register/Register2Form'

const Register2 = ({ navigation }) => {
    const submit = data => navigation.navigate('/register3')
    return (
        <Container>
            <BackHeader />
            <CustomText style={{ ...globalStyles.txt6_24_36_072, marginTop: 16 }} color={secondary500} text={"Create New Account"} />
            <CustomText style={{ ...globalStyles.txt4_14_21_028, marginTop: 8, marginBottom: 40 }} color={secondary300} text={"Input Your Account"} />
            <Register2Form submit={submit} />
        </Container>
    )
}

export default Register2

const styles = StyleSheet.create({})