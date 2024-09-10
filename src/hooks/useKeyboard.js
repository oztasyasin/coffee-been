import { useState, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboard = () => {
    const [keyboardStatus, setKeyboardStatus] = useState({
        isVisible: false,
        height: 0,
    });

    useEffect(() => {
        const showSubscription = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            (event) => {
                setKeyboardStatus({
                    isVisible: true,
                    height: event.endCoordinates.height,
                });
            }
        );

        const hideSubscription = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => {
                setKeyboardStatus({
                    isVisible: false,
                    height: 0,
                });
            }
        );
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return keyboardStatus;
};

export default useKeyboard;
