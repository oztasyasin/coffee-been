import { Text, TouchableOpacity, PanResponder, View, Vibration } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { styles } from './style'
import { Image } from 'expo-image'
import { Phone, PhoneDisconnect } from 'phosphor-react-native'
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    withTiming,
    runOnJS
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler'
const NotificationBar = () => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);
    const swipeThreshold = 800;
    const top = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
            translateY.value = Number(ctx.startY) + event.translationY;
        },
        onEnd: (event) => {
            const velocity = Math.abs(event.velocityY);
            if (velocity > swipeThreshold) {
                
                translateY.value = withTiming(event.velocityY > 0 ? 1000 : -1000, { duration: 300 });
                opacity.value = withTiming(0, { duration: 300 });
            } else {
                translateY.value = withTiming(0, { duration: 300 });
            }
        }
    });
    const stopVibration = () => Vibration.cancel();
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value
    }));
    useEffect(() => {
        Vibration.vibrate([500, 1000, 500], true);
    }, [])

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.container, animatedStyle]} >
                <View style={styles.frame}>
                    <Image
                        style={styles.image}
                        transition={500}
                        source={'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfDF8MHx8fDI%3D'}
                    />
                    <View style={styles.contentFrame}>
                        <Text style={styles.name}>
                            User Name
                        </Text>
                        <Text style={styles.description}>
                            Description
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={stopVibration}
                        style={styles.buttons}>
                        <Phone size={22} weight='bold' color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={stopVibration}
                        style={{
                            ...styles.buttons,
                            backgroundColor: "#FF0000"
                        }}>
                        <PhoneDisconnect size={22} weight='bold' color='white' />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </PanGestureHandler>
    )
}

export default NotificationBar
