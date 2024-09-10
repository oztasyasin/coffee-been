import { StyleSheet } from "react-native";
import { fontMap } from "../helper";
export const fontStyler = (fontWeight, fontSize, lineHeight, letterSpacing, fontFamily = "Urbanist") => {
    return {
        fontSize: fontSize,
        fontFamily: fontMap[`${fontFamily}_${fontWeight}`],
        fontWeight: `${fontWeight}`,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
    }
}
export const globalStyles = StyleSheet.create({
    txt4_10_12_012: {
        ...fontStyler(400, 8, 10, 0.1),
        opacity: 1,
    },
    txt6_14_21_028: {
        ...fontStyler(600, 14, 21, -0.28, "Jakarta"),
    },
    txt6_14_21_028: {
        ...fontStyler(600, 14, 21, -0.28, "Jakarta"),
    },
    txt4_12_24_null: {
        ...fontStyler(400, 12, 24, null, "Jakarta"),
    },
    txt6_40_60_012: {
        ...fontStyler(600, 40, 60, -1.2),
    },
    txt4_16_26_016: {
        ...fontStyler(400, 16, 26, 0.16)
    },
    txt6_16_24_032: {
        ...fontStyler(600, 16, 24, -0.32, "Jakarta"),
    },
    txt5_14_21_028: {
        ...fontStyler(500, 14, 21, -0.28, "Jakarta"),
    },
    txt5_18_27_036: {
        ...fontStyler(500, 18, 27, -0.36, "Jakarta"),
    },
    txt4_14_21_028: {
        ...fontStyler(400, 14, 21, -0.28)
    },
    txt4_12_192_012: {
        ...fontStyler(400, 12, 19.2, -0.12)
    },
    txt4_12_norm_012: {
        ...fontStyler(400, 12, null, -0.12)
    },
    txt6_24_36_072: {
        ...fontStyler(600, 24, 36, -0.72)
    },
    txt6_24_288_072: {
        ...fontStyler(600, 24, 28.8, -0.72)
    },
    txt7_20_38_06: {
        ...fontStyler(700, 20, 38, -0.6)
    },
    txt5_12_null_24: {
        ...fontStyler(500, 12, null, -0.24)
    },
    fullsize_row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})