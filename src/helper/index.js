import { baseHeight, baseWidht, fullHeight, fullWidth } from "../datas/staticDatas"

export const fontMap = {
    "Urbanist_100": "Urbanist_100Thin",
    "Urbanist_200": "Urbanist_200ExtraLight",
    "Urbanist_300": "Urbanist_300Light",
    "Urbanist_400": "Urbanist_400Regular",
    "Urbanist_500": "Urbanist_500Medium",
    "Urbanist_600": "Urbanist_600SemiBold",
    "Urbanist_700": "Urbanist_700Bold",
    "Urbanist_800": "Urbanist_800ExtraBold",
    "Urbanist_900": "Urbanist_900Black",
    "Jakarta_200": "PlusJakartaSans_200ExtraLight",
    "Jakarta_300": "PlusJakartaSans_300Light",
    "Jakarta_400": "PlusJakartaSans_400Regular",
    "Jakarta_500": "PlusJakartaSans_500Medium",
    "Jakarta_600": "PlusJakartaSans_600SemiBold",
    "Jakarta_700": "PlusJakartaSans_700Bold",
    "Jakarta_800": "PlusJakartaSans_800ExtraBold"
}

export const fontFamilyHelper = (family, weight) => fontMap[`${family}_${weight}`]


export const isEmpty = (data) => {
    return data == null || data === "" || data == NaN || data?.length == 0 || data === false
}

export const getAdaptedHeight = (height) => {
    const result = (fullHeight * height) / baseHeight;
    return result < height ? height : result;
}

export const getAdaptedWidth = (width) => {
    const result = (fullWidth * width) / baseWidht;
    return result;
}