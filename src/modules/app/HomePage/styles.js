import {StyleSheet} from "react-native";
import {DARKBLUE, ORANGE} from "../../../constants/colors";

export const styles = StyleSheet.create({
    progressWheelsContainer: {
        marginVertical: 30,
        justifyContent:'space-evenly',
        flexDirection:'row',

    },
    buttonGroupTextStyle: {
        color: DARKBLUE,
        fontSize: 15,

    },
    buttonGroupSelectedTextStyle: {
        color: ORANGE,
        fontSize: 15
    },
    buttonGroupSelectedButtonStyle: {
        borderBottomWidth: 3,
        borderColor: ORANGE
    },
    buttonGroupInnerBorderStyle: {
        color: DARKBLUE
    },
});
