import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container, { Header } from '../../../components/shared/Container';
import { Image } from 'expo-image';
import FillGradient from '../../../components/shared/FillGradient';
import CustomButton from '../../../components/shared/CustomButton';
import CustomText from '../../../components/shared/CustomText';
import { fontStyler, globalStyles } from '../../../styles/globalStyles';
import { themeLight } from '../../../datas/colors';
import { MapPin } from 'phosphor-react-native';
import ProfilePhotosRow from '../../../components/shared/ProfilePhotosRow';
import { peopleImage } from '../../../datas/staticDatas';

const CoverPlace = ({ navigation, route }) => {
    const { cafe } = route?.params;
    return (
        <Container lightHeader>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />
            <Image
                style={styles.image}
                source={cafe?.image}
            />
            <FillGradient />
            <View style={styles.outFrame}>
                <View>
                    <View style={styles.infoFrame}>
                        <CustomText style={fontStyler(600, 32, 48, -0.96, "Jakarta")} color={themeLight} text={cafe?.name} />
                        <View style={{ ...globalStyles.fullsize_row, columnGap: 4 }}>
                            <MapPin size={16} color={themeLight} />
                            <CustomText style={globalStyles.txt5_12_null_24} color={themeLight} text={cafe?.address} />
                        </View>
                        <View style={{ ...globalStyles.fullsize_row, justifyContent: 'space-between' }}>
                            <CustomText style={globalStyles.txt5_12_null_24} color={themeLight} text={"100+ people have explored"} />
                            <ProfilePhotosRow data={peopleImage} />
                        </View>
                    </View>
                    <CustomText style={globalStyles.txt4_12_24_null} color={themeLight} text={cafe.info} />
                </View>
                <CustomButton
                    onPress={() => navigation.navigate('/placeDetail', { cafe: cafe })}
                    text={"See More"}
                />
            </View>

        </Container>
    )
}

export default CoverPlace

const styles = StyleSheet.create({
    outFrame: {
        rowGap: 36,
        flex: 1,
        justifyContent: 'flex-end'
    },
    infoFrame: {
        rowGap: 12,
        paddingBottom: 24,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: themeLight
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        ...StyleSheet.absoluteFill
    }
})