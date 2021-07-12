import { StyleSheet } from "react-native";
import {GREEN, ORANGE, YELLOW} from "../../../constants/colors";
import {DEVICEWIDTH} from "../../../constants/general";


export const styles = StyleSheet.create({
    container: {
    },
    levelProgressContainer: {
        height: 100,
        justifyContent:'center',
        alignItems:'center',

    },
    titleText: {
        color: ORANGE,
        textAlign: 'center',
        fontSize: 15,
        marginTop: 15,
    },
    xpTextContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    xpText: {
        textAlign:'center',
        color: GREEN,
        fontSize: 18,
        fontWeight: '700',
    },
    progressContainer: {
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'flex-end',
        width:DEVICEWIDTH,
        flexDirection:'row',
    },
    progress: {
        justifyContent:'center',
        marginBottom: 7
    },
    levelPrevText: {
        color: GREEN,
        fontSize: 21,
    },
    levelNextText: {
        color: YELLOW,
        fontSize: 21
    },
    divider: {
        marginVertical: 15,
    }
})
