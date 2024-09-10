import React from 'react'
import OnboardingBaseSection from '../../sections/onboarding/OnboardingBaseSection'

const Onboarding2 = ({ route }) => {
    const { image } = route?.params;
    return (
        <OnboardingBaseSection
            image={image}
            step={2}
            title={"Monitor and\nvisit the cafe"}
            description={"Monitor the state of the cafe and visit\nwith your friends"}
            buttonText={"Next"}
            path={"/onboarding3"}
        />
    )
}

export default Onboarding2

