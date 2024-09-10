import { StyleSheet } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import BackHeader from '../../../components/shared/header/BackHeader'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'
import { secondary300, secondary500 } from '../../../datas/colors'
import CreatePasswordForm from '../../../forms/auth/login/CreatePasswordForm'

const CreateNewPassword = ({ navigation }) => {
    const submit = data => navigation.navigate('/login');
    return (
        <Container>
            <BackHeader />
            <CustomText style={{ ...globalStyles.txt6_24_36_072, marginTop: 16 }} color={secondary500} text={"Create New Password"} />
            <CustomText style={{ ...globalStyles.txt4_14_21_028, marginTop: 8, marginBottom: 40 }} color={secondary300} text={"Input Your New Password"} />
            <CreatePasswordForm submit={submit} />
        </Container>
    )
}

export default CreateNewPassword

const styles = StyleSheet.create({})