import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../../components/shared/FormContainer';
import { TextField } from '../../../components/shared/input/CustomInput';
import CustomButton from '../../../components/shared/CustomButton';
import { CheckField } from '../../../components/shared/input/CheckBox';
import { globalStyles } from '../../../styles/globalStyles';
import CustomText from '../../../components/shared/CustomText';
import { secondary300 } from '../../../datas/colors';
const validationSchema = yup.object().shape({
    "email": yup.string().required(),
    "accept": yup.bool()
});
const Register2Form = (props) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormContainer split>
            <View style={{ rowGap: 16 }} >
                <TextField
                    error={errors.email}
                    placeholder={"Your Email"}
                    control={control}
                    name={'email'} />
                <View style={{ ...globalStyles.fullsize_row, alignItems: 'flex-start', marginTop: -4 }}>
                    <CheckField
                        control={control}
                        name={'accept'}
                    />
                    <CustomText style={globalStyles.txt4_12_192_012} color={secondary300} mh={8} text={"I would like to receive marketing and policy\ninformation from coffee bean."} />
                </View>
            </View>
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Create Accout"}
            />
        </FormContainer>
    )
}

export default Register2Form

const styles = StyleSheet.create({})