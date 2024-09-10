import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../../components/shared/Container'
import CustomButton from '../../../components/shared/CustomButton'
import { Image } from 'expo-image'
import { blurhash } from '../../../components/shared/BackImage'
import { secondary500, themeLight } from '../../../datas/colors'
import CustomText from '../../../components/shared/CustomText'
import { globalStyles } from '../../../styles/globalStyles'

const Register5 = ({ navigation }) => {
    return (
        <Container>
            <View style={styles.mainFrame}>
                <View style={styles.imageFrame}>
                    <Image
                        placeholder={blurhash}
                        style={{ ...styles.image, ...styles.backImage2 }}
                        transition={500}
                        source={"https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhZmV8ZW58MHwxfDB8fHwy"}
                    />
                    <Image
                        placeholder={blurhash}
                        style={{ ...styles.image, ...styles.backImage1 }}
                        transition={500}
                        source={"https://images.unsplash.com/photo-1518553300442-dc00435b8b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN1Y2Nlc3MlMjBjb2ZmZWV8ZW58MHwxfDB8fHwy"}
                    />
                </View>
                <View>
                    <CustomText style={{ ...globalStyles.txt6_24_288_072, textAlign: 'center' }} text={"Successfully\ncreated an account"} color={secondary500} />
                    <CustomText style={{ ...globalStyles.txt4_14_21_028, textAlign: 'center', marginTop: 8 }} text={"After this you can explore our services and\nenjoy our products. Have fun and enjoy it!"} color={secondary500} />
                </View>
            </View>
            <CustomButton onPress={() => navigation.navigate('/main')} text={"Let's Explore"} />
        </Container>
    )
}

export default Register5

const styles = StyleSheet.create({
    backImage1: {
        position: 'absolute',
        zIndex: 5,
        borderWidth: 3,
        borderColor: themeLight,
        bottom: 0,
        left: 0
    },
    backImage2: {
        position: 'absolute',
        zIndex: 4,
        borderWidth: 3,
        borderColor: themeLight,
        top: 0,
        right: 0
    },
    image: {
        height: 200,
        width: 180,
        borderRadius: 12,
    },
    mainFrame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 40
    },
    imageFrame: {
        width: 231,
        height: 218
    }
})