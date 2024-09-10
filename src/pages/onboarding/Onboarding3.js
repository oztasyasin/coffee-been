import React from 'react'
import OnboardingBaseSection from '../../sections/onboarding/OnboardingBaseSection'

const Onboarding3 = ({ route }) => {
    const { image } = route?.params;
    return (
        <OnboardingBaseSection
            image={image}
            step={3}
            title={"Get ready for the\nnewest coffee"}
            description={"Get ready to try the newest coffee\nvariant with your friends"}
            buttonText={"Get Started"}
            path={"/login"}
        />
    )
}

export default Onboarding3

