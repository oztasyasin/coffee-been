import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextField } from '../../../components/shared/input/CustomInput'
import FormContainer from '../../../components/shared/FormContainer';
import Logo from '../../../components/svg/Logo';
import { CheckField } from '../../../components/shared/input/CheckBox';
import { globalStyles } from '../../../styles/globalStyles';
import CustomText from '../../../components/shared/CustomText';
import { secondary300, secondary500, primary500 } from '../../../datas/colors';
import { fontFamilyHelper, getAdaptedHeight } from '../../../helper';
import CustomButton from '../../../components/shared/CustomButton';
import Splitter from '../../../components/shared/Splitter';
import MiniButtons from '../../../components/shared/MiniButtons';
import AppleLogo from '../../../components/svg/AppleLogo';
import GooglePlayLogo from '../../../components/svg/GooglePlayLogo';
import { FacebookLogo } from 'phosphor-react-native';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
    "email": yup.string().email().required(),
    "password": yup.string().required(),
    "rememberme": yup.bool()
});
const LoginForm = ({ navigation, submit }) => {
    const { navigate } = navigation;
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const { rememberme } = watch();
    return (
        <>
            <FormContainer rowGap={16}>
                <View style={styles.logoFrame}>
                    <Logo />
                </View>
                <TextField
                    placeholder={"Email"}
                    control={control}
                    name={'email'} />
                <TextField
                    placeholder={"Password"}
                    control={control}
                    name={'password'} />
                <View style={{ ...globalStyles.fullsize_row, marginTop: -8 }}>
                    <CheckField
                        name={'rememberme'}
                        control={control} />
                    <CustomText text={"Remember me"} mh={5} style={{ ...globalStyles.txt4_14_21_028, flex: 1 }} color={rememberme ? secondary500 : secondary300} />
                    <TouchableOpacity onPress={() => navigate('/forgotPassword')}>
                        <CustomText text={"Forgot password"} style={{ ...globalStyles.txt4_14_21_028, fontFamily: fontFamilyHelper("Jakarta", 500) }} color={primary500} />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomFrame}>
                    <CustomButton onPress={submit} text={"Sign In"} />
                </View>
            </FormContainer>
            <CustomButton onPress={() => navigate('/register1')} mt={20} withBorder textColor={secondary500} color={"transparent"} text={"Create Account"} />
            <Splitter mt={getAdaptedHeight(40)} mb={getAdaptedHeight(40)} text={"or continue with"} />
            <View style={styles.bottomButtonFrame}>
                <MiniButtons>
                    <AppleLogo />
                </MiniButtons>
                <MiniButtons>
                    <GooglePlayLogo />
                </MiniButtons>
                <MiniButtons>
                    <FacebookLogo weight='fill' color={"#3b5998"} />
                </MiniButtons>
            </View>
        </>

    )
}

export default LoginForm

const styles = StyleSheet.create({
    bottomButtonFrame: {
        width: '100%',
        columnGap: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomFrame: {
        rowGap: 20,
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    logoFrame: {
        flex: 1,
        maxHeight: 156,
        justifyContent: 'center',
        alignItems: 'center'
    },
})