import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextField } from '../../../components/shared/input/CustomInput'

const CreditCardInputsSection = ({ control }) => {
    return (
        <View style={styles.frame}>
            <TextField
                control={control}
                name={'cardNumber'}
                placeholder={"Card Number"}
            />
            <TextField
                control={control}
                name={'cardHolder'}
                placeholder={"Card Holder"}
            />
            <TextField
                control={control}
                name={'exprationDate'}
                placeholder={"Expration Date"}
            />
            <TextField
                control={control}
                name={'cvc'}
                placeholder={"CVC"}
            />
        </View>
    )
}

export default CreditCardInputsSection

const styles = StyleSheet.create({
    frame: {
        rowGap: 20,
        marginBottom: 24
    }
})