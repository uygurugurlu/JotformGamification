import {StyleSheet} from "react-native";
import {DEVICEHEIGHT, DEVICEWIDTH} from "../../../constants/general";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:150,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        height: DEVICEHEIGHT
    },
    backImage: {
        resizeMode: 'contain',
        width: DEVICEWIDTH,


    },
})
