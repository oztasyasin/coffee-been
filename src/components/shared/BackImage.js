import { StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

export const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
const BackImage = ({ image }) => {
    return (
        <Image
            style={styles.image}
            source={image}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
        />
    )
}

export default BackImage

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFill,
        position: 'absolute',
        zIndex: -2
    }
})