import React from 'react'
import OnboardingBaseSection from '../../sections/onboarding/OnboardingBaseSection'

const Onboarding1 = ({ route }) => {
    const { image } = route?.params;
    return (
        <OnboardingBaseSection
            image={image}
            step={1}
            title={"Let's explore\nKinds of coffee"}
            description={"Let's explore various coffee flavors\nwith us with just few clicks"}
            buttonText={"Next"}
            path={"/onboarding2"}
        />
    )
}

export default Onboarding1

