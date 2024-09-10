import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const TabContainer = ({ children, handleScroll, gap }) => {
    const lastScrollY = useRef(0); // Önceki kaydırma pozisyonunu takip eder

    const scrollEvent = (event) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;

        if (currentScrollY > 0 && lastScrollY.current <= 0) {
            handleScroll(true);
        } else if (currentScrollY <= 0 && lastScrollY.current > 0) {
            handleScroll(false);
        }

        lastScrollY.current = currentScrollY;
    };
    return (
        <ScrollView
            onScroll={scrollEvent}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ rowGap: gap }}
            style={styles.frame}>
            {children}
        </ScrollView>
    )
}

export default TabContainer

const styles = StyleSheet.create({})