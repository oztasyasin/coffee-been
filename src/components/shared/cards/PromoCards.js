import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { shadow } from '../../../datas/staticDatas'
import { Clock } from 'phosphor-react-native'
import { primary400, secondary400, secondary500, themeLight, themeRed } from '../../../datas/colors'
import { globalStyles } from '../../../styles/globalStyles'
import CustomText from '../CustomText'

const PromoCards = (props) => {
    return (
        <View style={styles.frame}>
            <Image
                style={styles.image}
                transition={500}
                source={props.img}
            />
            <View style={styles.contentFrame}>
                <View style={styles.contentInfo}>
                    <View style={styles.contentInfoTop}>
                        <Text style={{ ...globalStyles.txt6_14_21_028, color: secondary500, flex: 1 }}>{props.title}</Text>
                        {props.remain &&
                            <Text style={{ ...globalStyles.txt6_14_21_028, color: primary400 }}>{props.remain}<Text style={{ color: secondary400 }}>{`/${props.total}`}</Text></Text>
                        }
                    </View>
                    <Text style={{ ...globalStyles.txt4_12_norm_012, color: secondary500, opacity: 0.6 }}>{props.description}</Text>
                </View>
                {
                    props.remainingTime &&
                    <View style={styles.remainingFrame}>
                        <Clock size={16} color={themeRed} weight='bold' />
                        <CustomText color={themeRed} text={"Ends in * hours"} replaceText={props.remainingTime} />
                    </View>
                }
            </View>
        </View>
    )
}

export default PromoCards
const styles = StyleSheet.create({
    contentInfo: {
        width: '100%',
        rowGap: 4
    },
    remainingFrame: {
        flexDirection: 'row',
        columnGap: 8,
    },
    contentInfoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentFrame: {
        rowGap: 12,
        flex: 1
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    frame: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 16,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
        backgroundColor: themeLight,
        ...shadow
    }
})