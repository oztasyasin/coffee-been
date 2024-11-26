import { ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const TabContainer = ({ children, handleScroll, gap }) => {
    const viewFlagRef = useRef(false);
    const isAvailable = useRef(true);
    const lockfunc = () => {
        isAvailable.current = false
        setTimeout(() => isAvailable.current = true, 500);
    }
    const scrollEvent = (event) => {
        if (isAvailable?.current) {
            const currentScrollY = event.nativeEvent.contentOffset.y;
            if (currentScrollY >= 150 && !viewFlagRef.current) {
                handleScroll(true);
                viewFlagRef.current = true;
                lockfunc();
            } else if (currentScrollY == 0 && viewFlagRef.current) {
                handleScroll(false);
                viewFlagRef.current = false;
                lockfunc();
            }
        }
    };
    return (
        <ScrollView
            onScroll={scrollEvent}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ rowGap: gap, paddingHorizontal: 24 }}
            style={styles.frame}>
            {children}
        </ScrollView>
    )
}

export default TabContainer

const styles = StyleSheet.create({})