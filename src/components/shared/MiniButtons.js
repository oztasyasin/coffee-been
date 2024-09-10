import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { secondary100 } from '../../datas/colors'

const MiniButtons = (props) => {
    return (
        <TouchableOpacity style={styles.frame}>
            {props.children}
        </TouchableOpacity>
    )
}

export default MiniButtons

const styles = StyleSheet.create({
    frame: {
        width: 72,
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: secondary100,
        justifyContent: 'center',
        alignItems: 'center'
    }
})