import { StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '../../components/shared/Container'
import FillGradient from '../../components/shared/FillGradient'
import BackImage from '../../components/shared/BackImage'
import OnboardingProgress from '../../components/shared/OnboardingProgress'
import CustomButton from '../../components/shared/CustomButton'
import { useNavigation } from '@react-navigation/native'
import CustomText from '../../components/shared/CustomText'
import { globalStyles } from '../../styles/globalStyles'
import { themeLight } from '../../datas/colors'
import PagerView from 'react-native-pager-view'
const slideDatas = [
    {
        key: 0,
        image: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfDF8MHx8fDI%3D",
        title: "Let's explore\nKinds of coffee",
        subTitle: "Let's explore various coffee flavors\nwith us with just few clicks",
    },
    {
        key: 1,
        image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZXxlbnwwfDF8MHx8fDI%3D",
        subTitle: "Monitor the state of the cafe and visit\nwith your friends",
        title: "Monitor and\nvisit the cafe"
    },
    {
        key: 2,
        title: "Get ready for the\nnewest coffee",
        image: "https://images.unsplash.com/photo-1522120331923-bd99e51eb26e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhZmV8ZW58MHwxfDB8fHwy",
        subTitle: "Get ready to try the newest coffee\nvariant with your friends"
    }
]
const Onboarding = ({ navigation }) => {
    const { navigate } = navigation;
    const [step, setStep] = useState(0);
    const pagerRef = useRef(null)
    const handleButtonPress = () => {
        step < slideDatas.length - 1 ?
            goToNextPage() :
            navigate('/login');
    }
    const goToNextPage = () => {
        if (pagerRef.current) {
            const nextPage = step + 1;
            pagerRef.current.setPage(nextPage);
        }
    };

    const handlePageChange = (event) => {
        const pageIndex = event.nativeEvent.position;
        setStep(pageIndex);
    };
    return (
        <Container>
            <FillGradient />
            <BackImage
                image={slideDatas[step].image}
            />
            <PagerView
                ref={pagerRef}
                onPageSelected={handlePageChange}
                style={styles.mainFrame}>
                {
                    slideDatas?.map((item) =>
                        <View key={item.key} style={styles.textsFrame}>
                            <CustomText style={{ ...globalStyles.txt6_40_60_012 }} text={item.title} color={themeLight} />
                            <CustomText style={globalStyles.txt4_16_26_016} text={item.subTitle} color={themeLight} />
                        </View>)
                }
            </PagerView>
            <OnboardingProgress step={step + 1} max={3} />
            <CustomButton onPress={handleButtonPress} text={"buttonText"} />
        </Container>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    textsFrame: {
        rowGap: 20,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 32
    },
    mainFrame: {
        flex: 1,
    }
})
