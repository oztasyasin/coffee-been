import { StyleSheet } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../../components/shared/FormContainer';
import { TextField } from '../../../components/shared/input/CustomInput';
import CustomButton from '../../../components/shared/CustomButton';
const validationSchema = yup.object().shape({
    "email": yup.string().email().required(),
});
const ForgotPasswordForm = (props) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormContainer split>
            <TextField
                error={errors.email}
                placeholder={"Email"}
                control={control}
                name={'email'} />
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Submit"}
            />
        </FormContainer>
    )
}

export default ForgotPasswordForm

const styles = StyleSheet.create({})