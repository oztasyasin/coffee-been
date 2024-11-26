import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { primary400, secondary300, secondary500, themeLight, themeRed } from '../../../datas/colors'
import { CreditCard } from 'phosphor-react-native';
import IncomeLogo from '../../svg/IncomeLogo';
import OutcomeLogo from '../../svg/OutcomeLogo';
import { shadow } from '../../../datas/staticDatas';
import CustomText from '../CustomText';
import { globalStyles } from '../../../styles/globalStyles';
import { formatPrice } from '../../../helper';

const HistoryCard = (props) => {
    console.log(props);

    return (
        <View style={styles.frame}>
            <View style={{ ...styles.iconFrame, backgroundColor: props?.isIncome ? primary400 : themeRed }}>
                {props.isIncome ? <IncomeLogo /> : <OutcomeLogo />}
            </View>
            <View style={styles.contentFrame}>
                <View style={{ flexDirection: 'row' }}>
                    <CustomText color={secondary500} style={{ ...globalStyles.txt6_14_21_028, flex: 1 }} text={props.type} />
                    <CustomText color={secondary300} text={formatPrice(props.price)} style={globalStyles.txt5_14_21_028} />
                </View>
                <CustomText numLines={2} color={secondary500} text={props.description} style={{ ...globalStyles.txt4_12_216_012, opacity: 0.5 }} />
                <CustomText color={secondary300} text={props.date} style={globalStyles.txt4_12_216_012} />
            </View>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    contentFrame: {
        flex: 1,
        rowGap: 8
    },
    iconFrame: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    frame: {
        borderRadius: 16,
        backgroundColor: themeLight,
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        paddingRight: 35,
        flexDirection: 'row',
        ...shadow,
        columnGap: 12
    }
})