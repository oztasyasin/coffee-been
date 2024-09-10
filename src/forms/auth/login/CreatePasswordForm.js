import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../../components/shared/FormContainer';
import { TextField } from '../../../components/shared/input/CustomInput';
import CustomButton from '../../../components/shared/CustomButton';
const validationSchema = yup.object().shape({
    "password": yup.string().required(),
    "repassword": yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required(),
});
const CreatePasswordForm = (props) => {
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
                <TextField
                    error={errors.repassword}
                    placeholder={"Repassword"}
                    control={control}
                    name={'repassword'} />
            </View>
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Save"}
            />
        </FormContainer>
    )
}

export default CreatePasswordForm

const styles = StyleSheet.create({})