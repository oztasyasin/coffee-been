import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormContainer from '../../components/shared/FormContainer';
import CustomText from '../../components/shared/CustomText';
import { globalStyles } from '../../styles/globalStyles';
import { secondary300, secondary400, secondary500 } from '../../datas/colors';
import PagerView from 'react-native-pager-view';
import { TextField } from '../../components/shared/input/CustomInput';
import { fullWidth } from '../../datas/staticDatas';
import CustomDropdown, { DropdonwField } from '../../components/shared/dropdown/CustomDropdown';
import CustomButton from '../../components/shared/CustomButton';
import { DateTimePickerField } from '../../components/shared/input/DateTİmePickerField';
import AnimatedExtendFrame from '../../components/shared/AnimatedExtendFrame';
import CreditCardInputsSection from '../../sections/home/topup/CreditCardInputsSection';
const validationSchema = yup.object().shape({
    "name": yup.string().required(),
    "number": yup.string().required(),
    "address": yup.string().required(),
    "participants": yup.string().required(),
    "time": yup.string().required(),
    "duration": yup.string().required(),
    "date": yup.string().required(),
    "paymentType": yup.string().required(),
});
const participants = [
    {
        id: "0",
        name: "Yasin Öztaş",
    },
    {
        id: "1",
        name: "Muhammet İlbaş",
    },
    {
        id: "2",
        name: "Mustafa Küçük"
    }
]
const durations = [
    {
        id: "0",
        text: "0-1 hours"
    },
    {
        id: "1",
        text: "1-2 hours"
    },
    {
        id: "2",
        text: "2 hours or more"
    },
]
const titleInfos = [
    {
        title: "Billing Info",
        subTitle: "Please enter your billing info",
    },
    {
        title: "Booking Info",
        subTitle: "Please select your booking date",
    },
    {
        title: "Payment Method",
        subTitle: "Please enter your payment method"
    }
]
const BookingForm = () => {
    const [step, setStep] = useState(0)
    const pagerRef = useRef();
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const { paymentType } = watch();
    const changeStep = (itt) => setStep((current) => (current + itt))
    const handlePress = () => {
        if (step < 2) {
            changeStep(1);
            pagerRef.current.setPage(step + 1)
        }
    }
    const Step1 = () => (
        <View style={{ rowGap: 12, paddingHorizontal: 24 }}>
            <TextField
                control={control}
                name={'name'}
                placeholder={"Your name"}
            />
            <TextField
                control={control}
                name={'number'}
                placeholder={"Phone number"}
            />
            <TextField
                control={control}
                name={'address'}
                placeholder={"Address"}
            />
        </View>
    )
    const Step2 = () => (
        <View style={{ rowGap: 12, paddingHorizontal: 24 }}>
            <DropdonwField
                control={control}
                name={"participants"}
                shownProp={"name"}
                options={participants}
                placeholder={"Participants"}
            />
            <DropdonwField
                control={control}
                name={"Duration"}
                shownProp={"text"}
                options={durations}
                placeholder={"Duration"}
            />
            <DateTimePickerField
                control={control}
                name={'date'}
                placeholder={"Date"}
            />
            <DateTimePickerField
                control={control}
                mode={'time'}
                name={'time'}
                placeholder={"Time"}
            />
        </View>
    )
    const Step3 = () => (
        <View style={{ rowGap: 12, paddingHorizontal: 24 }}>
            <AnimatedExtendFrame
                onPress={() => setValue('paymentType', paymentType != "creditCard" ? "creditCard" : null)}
                isSelected={paymentType === "creditCard"}
                extendedHeight={362}
                content={<CreditCardInputsSection control={control} />}
                text={"Credit Card"}
                name={"paymentType"} />
        </View>
    )
    const handlePageSelect = (event) => {
        setStep(event.nativeEvent.position);
    }

    return (
        <FormContainer>
            <View style={styles.topFrame}>
                <View style={styles.topLeft}>
                    <CustomText color={secondary500} style={globalStyles.txt6_20_30_04} text={titleInfos[step].title} />
                    <CustomText color={secondary400} style={globalStyles.txt4_14_21_028} text={titleInfos[step].subTitle} />
                </View>
                <CustomText text={`Step ${step + 1} of 3`} color={secondary300} style={globalStyles.txt5_14_21_028} />
            </View>
            <PagerView
                ref={pagerRef}
                onPageSelected={handlePageSelect}
                style={styles.pagerView}>
                <Step1 key={1} />
                <Step2 key={2} />
                <Step3 key={3} />
            </PagerView>
            <CustomButton onPress={handlePress} text={"Pay Now"} />
        </FormContainer>
    )
}

export default BookingForm

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
        width: fullWidth,
        left: -24,
        paddingHorizontal: 24,
    },
    topLeft: {
        rowGap: 4,
        flex: 1
    },
    topFrame: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})