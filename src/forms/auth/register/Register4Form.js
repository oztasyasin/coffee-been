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
import { DigitsArea } from '../../../components/shared/input/DigitsInput';
const validationSchema = yup.object().shape({
    "digit": yup.string().required(),
});
const Register4Form = (props) => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    return (
        <FormContainer split>
            <View style={{ rowGap: 16 }} >
                <DigitsArea
                    name={"digit"}
                    control={control}
                />
                <CustomText style={{ ...globalStyles.txt4_12_192_012, marginTop: -4 }} color={secondary300} mh={8} text={"Your password must include at least one symbol and be 8 or more characters long."} />
            </View>
            <CustomButton
                onPress={handleSubmit(props.submit)}
                text={"Submit"}
            />
        </FormContainer>
    )
}

export default Register4Form

const styles = StyleSheet.create({})