import { StatusBar } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import LoginForm from '../../../forms/auth/login/LoginForm'

const Login = ({ navigation }) => {
    const submit = data => navigation.navigate('/main');
    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
            <LoginForm submit={submit} navigation={navigation} />
        </Container>
    )
}

export default Login