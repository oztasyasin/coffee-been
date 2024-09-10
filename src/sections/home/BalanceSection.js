import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { primary300, primary500, secondary500, themeLight } from '../../datas/colors'
import { globalStyles } from '../../styles/globalStyles'
import CustomText from '../../components/shared/CustomText'
import { fullWidth, isIos, shadow } from '../../datas/staticDatas'
import { Clock, CreditCard, Tag, Wallet } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
const buttonProps = {
    size: 24,
    weight: 'duotone',
    color: primary500
}
const balanceButtons = [
    {
        key: 0,
        title: "Top Up",
        icon: <Wallet {...buttonProps} />,
        path: '/topUp',
    },
    {
        key: 1,
        title: "Pay",
        icon: <CreditCard {...buttonProps} />,
        path: '/pay',
    },
    {
        key: 2,
        title: "Promo",
        icon: <Tag {...buttonProps} />,
        path: '/promo',
    },
    {
        key: 3,
        title: "History",
        icon: <Clock {...buttonProps} />,
        path: '/history',

    },
]
const CardButtons = (props) => (
    <TouchableOpacity onPress={() => props.navigate(props.path)} style={styles.cardButtons}>
        {props.icon}
        <CustomText text={props.title} style={{ ...globalStyles.txt5_14_21_028, opacity: 0.6 }} color={secondary500} />
    </TouchableOpacity>
)
const BalanceSection = () => {
    const { navigate } = useNavigation();
    const data = {
        cardBalance: 240,
        currency: "$"
    }
    return (
        <View style={styles.frame}>
            <Text style={{ ...globalStyles.txt7_20_38_06, color: themeLight }}>Coffee Beans</Text>
            <View style={styles.balanceFrame}>
                <View style={styles.balanceTop}>
                    <CustomText style={globalStyles.txt5_14_21_028} color={secondary500} text={"Your card balance"} />
                    <Text style={{ ...globalStyles.txt6_16_24_032 }} >{`${data.currency}${data.cardBalance.toFixed(2)}`}</Text>
                </View>
                <View style={styles.balanceBottom}>
                    {balanceButtons?.map((item) => (<CardButtons navigate={navigate} {...item} />))}
                </View>
            </View>
        </View>

    )
}

export default BalanceSection

const styles = StyleSheet.create({
    container: {
        height: 276
    },
    cardButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 9

    },
    balanceBottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16
    },
    balanceTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderStyle: isIos ? 'solid' : 'dashed',
        borderColor: primary300
    },
    balanceFrame: {
        width: '100%',
        borderRadius: 24,
        backgroundColor: themeLight,
        padding: 20,
        height: 150,
        marginTop: 28,
        marginBottom: -94,
        zIndex: 10,
        ...shadow
    },
    frame: {
        height: 182,
        paddingHorizontal: 24,
        backgroundColor: primary500,
        justifyContent: 'flex-end',
        zIndex: 20
    }
})