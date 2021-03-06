
import { StyleSheet } from "react-native";
import {BLUE, DARKBLUE, ORANGE} from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:ORANGE,
        height: 170,

    },
    imageContainer: {
        flex: 1,
        justifyContent:'center',
    },
    profileImage: {
        height: 70,
        width: 70,
        position: 'absolute',
        alignSelf:'center'
    },
    leagueImage: {
        height: 120,
        width: 120,
        alignSelf: 'center'
    },
    nameContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems:'center'
    },
    nameText: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '700'
    },
    teamText: {
        color: '#fff',
        fontSize: 15
    },
    scoreContainer: {
        position: 'absolute',
        height: 75,
        width: 75,
        backgroundColor: DARKBLUE,
        right: 25,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
        bottom: 40
    },
    scoreText: {
        color:'#fff',
        fontSize: 10,
        fontWeight: '600',
        textAlign:'center'
    },
    score: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center',
    },
    rankContainer: {
        position: 'absolute',
        height: 75,
        width: 75,
        backgroundColor: BLUE,
        left: 25,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
        bottom: 40
    },
})
