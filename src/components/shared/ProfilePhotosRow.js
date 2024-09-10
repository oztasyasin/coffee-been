import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { themeLight } from '../../datas/colors'

const ProfilePhotosRow = (props) => {
    return (
        <View style={styles.frame}>
            {
                props.data?.map((item, i) => {
                    return (
                        <Image
                            key={i}
                            style={{
                                ...styles.image,
                                zIndex: i
                            }}
                            source={item}
                        />
                    )
                })
            }
        </View>
    )
}

export default ProfilePhotosRow

const styles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
    },
    image: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        borderWidth: 1.5,
        borderColor: themeLight,
        marginLeft: -8
    }
})