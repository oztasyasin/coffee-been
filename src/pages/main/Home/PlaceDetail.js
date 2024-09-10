import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Container from '../../../components/shared/Container'
import { Image } from 'expo-image';
import FillGradient from '../../../components/shared/FillGradient';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailCafe from './DetailCafe';
import CoffeeShop from './CoffeeShop';
import CustomHorizontalBar from '../../../components/shared/CustomHorizontalBar';
import CustomText from '../../../components/shared/CustomText';
import { fontStyler, globalStyles } from '../../../styles/globalStyles';
import { MapPin } from 'phosphor-react-native';
import { secondary300, secondary500 } from '../../../datas/colors';
import ProfilePhotosRow from '../../../components/shared/ProfilePhotosRow';
import { peopleImage } from '../../../datas/staticDatas';
import { ScrollContext } from '../../../context/ScrollContext';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const DetailTabs = createMaterialTopTabNavigator();
const tabs = [
    {
        key: 0,
        name: "Detail Cafe",
        component: DetailCafe
    },
    {
        key: 1,
        name: "Coffee Shop",
        component: CoffeeShop
    }
]
const PlaceDetail = ({ route, navigation }) => {
    const animatedHeight = useSharedValue(200);
    const { cafe } = route?.params;
    const ref = useRef()
    const handleScroll = (isDown) => {
        const nextValue = isDown ? 0 : 200;
        console.log("fljsdhfkhjsdlfkjhds");
        ref?.current?.setNativeProps({
            style: {
                display: isDown ? 'none' : 'flex'
            }
        });
        animatedHeight.value = withSpring(isDown ? 0 : 200)
    }
    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: animatedHeight.value,
        };
    });
    return (
        <ScrollContext.Provider value={{ handleScroll }}>
            <Container title={"Detail Place"} darkHeader>
                <Animated.View style={[styles.imageFrame, animatedStyle]}>
                    <View ref={ref}>
                        <Image
                            source={cafe?.image}
                            style={styles.image}
                        />
                    </View>

                    <FillGradient style={styles.grediant} />
                </Animated.View>
                <View style={styles.infoFrame}>
                    <CustomText text={cafe?.name} style={fontStyler(600, 32, 48, -0.96, "jakarta")} />
                    <View style={{ ...globalStyles.fullsize_row, columnGap: 4 }}>
                        <MapPin size={16} color={secondary300} />
                        <CustomText style={globalStyles.txt5_12_null_24} color={secondary300} text={cafe?.address} />
                    </View>
                    <View style={{ ...globalStyles.fullsize_row, justifyContent: 'space-between' }}>
                        <CustomText style={{ ...globalStyles.txt5_12_null_24, opacity: 0.6 }} color={secondary500} text={"100+ people have explored"} />
                        <ProfilePhotosRow data={peopleImage} />
                    </View>
                </View>
                <DetailTabs.Navigator
                    sceneContainerStyle={{ backgroundColor: 'transparent' }}
                    tabBar={props => <CustomHorizontalBar {...props} />}
                >
                    {tabs?.map((item) => <DetailTabs.Screen initialParams={{ cafe: cafe }}  {...item} />)}
                </DetailTabs.Navigator>
            </Container>
        </ScrollContext.Provider>
    )
}

export default PlaceDetail

const styles = StyleSheet.create({
    infoFrame: {
        marginTop: 16,
        rowGap: 12
    },
    grediant: {
        zIndex: 9,
        borderRadius: 16
    },
    imageFrame: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16
    }
})