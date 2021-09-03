import { StyleSheet } from "react-native";
import {DARKBLUE, GREEN, ORANGE, YELLOW} from "../../../constants/colors";
import {DEVICEWIDTH, MARGINHORIZONTAL} from "../../../constants/general";


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
        fontSize: 15,
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
        fontSize: 18,
    },
    levelNextText: {
        color: YELLOW,
        fontSize: 18
    },
    divider: {
        marginVertical: 15,
    },
    cardsContainer: {
        height: 110,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:MARGINHORIZONTAL,
        alignItems:'center'
    },
    card: {
        height: 90,
        borderRadius: 15,
        width: 100,
        backgroundColor:DARKBLUE,
        justifyContent:'center',
    },
    cardTitle: {
        color:'#fff',
        textAlign:'center',
        fontSize: 13

    },
    cardStat: {
        color:'#fff',
        textAlign:'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    badgeContainer: {

    },
    sectionTitle: {
        marginLeft: MARGINHORIZONTAL,
        color: ORANGE,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },
    badgeIconContainer: {
      justifyContent:'center',
      alignItems:'center'
    },
    badgeIcon: {
        height: 50,
        width: 50,
        resizeMode:'contain',

    },
    row: {
      flexDirection:'row',
      justifyContent:'space-evenly',
        marginHorizontal: 15,
        marginVertical: 10
    },

})
