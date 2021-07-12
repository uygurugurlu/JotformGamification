import {StyleSheet} from "react-native";
import {DARKBLUE, ORANGE} from "../../../constants/colors";
import {DEVICEHEIGHT} from "../../../constants/general";

export const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        height: DEVICEHEIGHT
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
    buttonGroupContainer: {
        marginHorizontal: 0,
        marginBottom: 15,
        marginTop: 0,
    },

});
