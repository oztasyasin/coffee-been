import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useScrollContext } from '../../../context/ScrollContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabContainer from '../../../components/shared/TabContainer';
import { primary500, secondary300, themeLight } from '../../../datas/colors';
import { fontStyler } from '../../../styles/globalStyles';
import { fullWidth, shop } from '../../../datas/staticDatas';
import CustomText from '../../../components/shared/CustomText';
import ProductCard from '../../../components/shared/cards/ProductCard';
import { useCartStore } from '../../../store/cart';
import useCartTotal from '../../../hooks/useCartTotal';
import { formatPrice } from '../../../helper';

const CoffeeShop = () => {
    const { handleScroll } = useScrollContext();
    const { bottom } = useSafeAreaInsets();
    const { cart, addToCart, increaseCount, decreaseCount } = useCartStore();
    const total = useCartTotal();
    const getCount = (id) => {
        const cartProduct = cart?.find((obj) => obj.id === id);
        return cartProduct ? cartProduct?.count : null
    }

    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <TabContainer gap={24} handleScroll={handleScroll}>
                <View style={styles.productFrame}>
                    {shop?.map((item, i) =>
                        <ProductCard
                            count={getCount(item?.id)}
                            addToCart={() => addToCart(item)}
                            key={i}
                            {...item} />)}
                </View>
            </TabContainer>
            {Boolean(total) &&
                <View style={{ ...styles.bottomFrame, paddingBottom: 24 + bottom }}>
                    <CustomText style={fontStyler(500, 14, 21, -0.28, "jakarta")} color={secondary300} text={"Total: "} />
                    <CustomText style={fontStyler(600, 24, 30, -0.4, "jakarta", primary500)} color={primary500} text={formatPrice(total)} />
                    <TouchableOpacity style={styles.buttonFrame}>
                        <CustomText style={fontStyler(600, 16, 24, -0.32, "jakarta")} color={themeLight} text={"Order Now"} />
                    </TouchableOpacity>
                </View>}
        </>
    )
}

export default CoffeeShop

const styles = StyleSheet.create({
    productFrame: {
        gap: 12,
        paddingTop: 16,
        paddingBottom: 160
    },
    buttonFrame: {
        height: 54,
        borderRadius: 16,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary500,
        marginLeft: 'auto',
    },
    bottomFrame: {
        columnGap: 4,
        minWidth: fullWidth,
        position: 'absolute',
        bottom: 0,
        padding: 24,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: themeLight,
        zIndex: 6
    },
})