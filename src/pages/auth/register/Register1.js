import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BackHeader from '../../../components/shared/header/BackHeader'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary300, secondary500 } from '../../../datas/colors'
import Register1Form from '../../../forms/auth/register/Register1Form'

const Register1 = ({ navigation }) => {
    const submit = () => navigation.navigate('/register2')
    return (
        <Container>
            <BackHeader />
            <CustomText style={{ ...globalStyles.txt6_24_36_072, marginTop: 16 }} color={secondary500} text={"Create New Account"} />
            <CustomText style={{ ...globalStyles.txt4_14_21_028, marginTop: 8, marginBottom: 40 }} color={secondary300} text={"Input Your Name"} />
            <Register1Form submit={submit} />
        </Container>
    )
}

export default Register1

const styles = StyleSheet.create({})