import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/shared/CustomText';
import { formatPrice } from '../../helper';
import { globalStyles } from '../../styles/globalStyles';
import { secondary500 } from '../../datas/colors';
import { nominalTopUps } from '../../datas/staticDatas';
import SelectAbleBugged from '../../components/shared/SelectAbleBugged';
import { TextField } from '../../components/shared/input/CustomInput';
import FormContainer from '../../components/shared/FormContainer';
import AnimatedExtendFrame from '../../components/shared/AnimatedExtendFrame';
import CreditCardInputsSection from '../../sections/home/topup/CreditCardInputsSection';
import CustomButton from '../../components/shared/CustomButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
    "price": yup.number().required(),
    "paymentType": yup.string().required(),
});
const TopupFrom = () => {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const { price, paymentType } = watch();
    return (
        <FormContainer rowGap={24}>
            <ScrollView contentContainerStyle={{ rowGap: 24 }}>
                <View>
                    <CustomText style={{ ...globalStyles.txt6_16_24_032, marginBottom: 16 }} color={secondary500} text={"Choose Nominal Top Up"} />
                    <View style={styles.nominalFrame}>
                        {nominalTopUps?.map((item) => (
                            <SelectAbleBugged
                                isSelected={price == item.price}
                                onPress={() => setValue('price', item?.price)}
                                key={item?.key}
                                text={formatPrice(item?.price)} />
                        ))}
                    </View>
                </View>
                <TextField
                    control={control}
                    name={'price'}
                    placeholder={"Or enter the top up nominal here"}
                />
                <AnimatedExtendFrame
                    onPress={() => setValue('paymentType', paymentType != "creditCard" ? "creditCard" : null)}
                    isSelected={paymentType === "creditCard"}
                    extendedHeight={362}
                    content={<CreditCardInputsSection control={control} />}
                    text={"Credit Card"}
                    name={"creditCard"} />
                <CustomButton text={"Pay Now"} />
            </ScrollView>
        </FormContainer>
    )
}

export default TopupFrom


const styles = StyleSheet.create({
    nominalFrame: {
        width: '100%',
        columnGap: 8,
        rowGap: 16,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})