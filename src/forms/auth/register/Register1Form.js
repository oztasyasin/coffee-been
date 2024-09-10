import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../../components/shared/FormContainer';
import { TextField } from '../../../components/shared/input/CustomInput';
import CustomButton from '../../../components/shared/CustomButton';
const validationSchema = yup.object().shape({
    "firtName": yup.string().required(),
    "lastName": yup.string().required(),
});
const Register1Form = (props) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormContainer split>
            <View style={{ rowGap: 16 }} >
                <TextField
                    error={errors.firtName}
                    placeholder={"First Name"}
                    control={control}
                    name={'firtName'} />
                <TextField
                    error={errors.lastName}
                    placeholder={"Last Name"}
                    control={control}
                    name={'lastName'} />
            </View>
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Input Accout"}
            />
        </FormContainer>
    )
}

export default Register1Form

const styles = StyleSheet.create({})