import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const color = {
    gray: "#80847e",
    grayT1: "#80847EBB",
    grayT2: "#80847E99",
    grayT3: "#80847E33",
    azure: "#F0FFFF",
    azureT1: "#F0FFFFBB",
    azureT2: "#F0FFFF99",
    azureT3: "#F0FFFF33",
    green: "#9FC9BC",
    green: "#9FC9BCBB",
    green: "#9FC9BC99",
    green: "#9FC9BC33",
}

export const size = {
    xs: RFPercentage(1),
    sm: RFPercentage(1.5),
    m: RFPercentage(2.25),
    lg: RFPercentage(3),
    xl: RFPercentage(4)
}

export const image = StyleSheet.create({
    cover: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    contain: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
})

export const theme = StyleSheet.create({
    
})