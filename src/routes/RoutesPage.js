import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './routes'
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { navigatorScreenOptions } from '../datas/staticDatas';
import CustomToaster from '../components/toaster/CustomToaster';
import { useAuthStore } from '../store/auth';
import '../lang/i18n';

import { useLoadFonts } from '../hooks/useLoadFonts';
import { StatusBar } from 'react-native';
const queryClient = new QueryClient();
const Stack = createStackNavigator();
const toastConfig = {
    success: (props) => <CustomToaster {...props} type={"success"} />,
    error: (props) => <CustomToaster {...props} type={"error"} />,
}
const RoutesPage = () => {
    const user = useAuthStore((state) => state.user);
    const { loaded, error } = useLoadFonts();
    if (!loaded && !error) return null;
    return (
        <QueryClientProvider
            client={queryClient}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        {...navigatorScreenOptions}
                        initialRouteName={user ? '/createAccount' : '/launch'} >
                        {routes?.map((item) => <Stack.Screen {...item} />)}
                    </Stack.Navigator>
                </NavigationContainer>
                <Toast
                    config={toastConfig}
                    position='bottom' />
            </SafeAreaProvider>
        </QueryClientProvider>
    )
}

export default RoutesPage
