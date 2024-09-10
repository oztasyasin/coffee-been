import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../../components/shared/FormContainer';
import { TextField } from '../../../components/shared/input/CustomInput';
import CustomButton from '../../../components/shared/CustomButton';
import CustomText from '../../../components/shared/CustomText';
import { globalStyles } from '../../../styles/globalStyles';
import { secondary300 } from '../../../datas/colors';
const validationSchema = yup.object().shape({
    "password": yup.string().required(),
});
const Register3Form = (props) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormContainer split>
            <View style={{ rowGap: 16 }} >
                <TextField
                    error={errors.password}
                    placeholder={"Password"}
                    control={control}
                    name={'password'} />
                <CustomText style={{ ...globalStyles.txt4_12_192_012, marginTop: -4 }} color={secondary300} mh={8} text={"Your password must include at least one symbol and be 8 or more characters long."} />
            </View>
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Verification"}
            />
        </FormContainer>
    )
}

export default Register3Form

const styles = StyleSheet.create({})