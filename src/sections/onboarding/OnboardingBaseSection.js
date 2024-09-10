import { StyleSheet, View } from 'react-native'
import React from 'react'
import Container from '../../components/shared/Container'
import FillGradient from '../../components/shared/FillGradient'
import BackImage from '../../components/shared/BackImage'
import CustomText from '../../components/shared/CustomText'
import { globalStyles } from '../../styles/globalStyles'
import OnboardingProgress from '../../components/shared/OnboardingProgress'
import CustomButton from '../../components/shared/CustomButton'
import { themeLight } from '../../datas/colors'
import { useNavigation } from '@react-navigation/native'

const OnboardingBaseSection = ({ title, description, step, buttonText, image, path, titleWidth }) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <FillGradient />
            <BackImage image={image} />
            <View style={styles.mainFrame}>
                <View style={styles.textsFrame}>
                    <CustomText style={{ ...globalStyles.txt6_40_60_012 }} text={title} color={themeLight} />
                    <CustomText style={globalStyles.txt4_16_26_016} text={description} color={themeLight} />
                </View>
                <OnboardingProgress step={step} max={3} />
            </View>
            <CustomButton onPress={() => navigate(path)} text={buttonText} />
        </Container>
    )
}

export default OnboardingBaseSection

const styles = StyleSheet.create({
    textsFrame: {
        rowGap: 20
    },
    mainFrame: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 46,
        rowGap: 32
    }
})