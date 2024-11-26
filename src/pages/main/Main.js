import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import CustomTabBar from '../../components/shared/CustomTabBar';
import Coffee from './Coffee';
import Reward from './Reward';
import Profile from './Profile';
import NotificationBar from '../../components/shared/notify';
const MainTab = createBottomTabNavigator();
const mainTabsRoutes = [
    {
        key: 0,
        name: "Home",
        component: Home,
    },
    {
        key: 1,
        name: "Coffee",
        component: Coffee,
    },
    {
        key: 2,
        name: "Reward",
        component: Reward,
    },
    {
        key: 3,
        name: "Profile",
        component: Profile,
    },
]
const Main = () => {
    return (
        <>
            <MainTab.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'
                tabBar={(props) => <CustomTabBar {...props} />}
            >
                {mainTabsRoutes.map((tab) => <MainTab.Screen {...tab} />)}
            </MainTab.Navigator>
        </>

    )
}

export default Main

const styles = StyleSheet.create({})