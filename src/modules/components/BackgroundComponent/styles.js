import {StyleSheet} from "react-native";
import {DEVICEWIDTH} from "../../../constants/general";

export const styles = StyleSheet.create({
    imageBackground: {
        width: "100%",
        overflow: 'hidden' // prevent image overflow the container
    },
    image: {
        resizeMode: "cover",
        height: DEVICEWIDTH, // the image height
        width: DEVICEWIDTH,
        top: undefined
    },
})
