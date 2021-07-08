import {StyleSheet} from "react-native";
import {MARGINHORIZONTAL} from "../../../constants/general";
import {DARKBLUE} from "../../../constants/colors";
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: MARGINHORIZONTAL,
        backgroundColor: DARKBLUE,
        borderRadius: 15,
    }
})
export const rankCardStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        height: 70,
    },
    rankContainer:{
      flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankText: {
      fontSize: 33,
      color: '#fff',
        fontWeight: '800'

    },
    avatarContainer:{
      flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    leagueImage: {
        position: 'absolute',
        height: 65,
        width: 65,
        alignSelf: 'center',
    },
    avatar: {
        position: 'absolute',
        height: 40,
        width: 40,
        alignSelf: 'center',

    },
    nameContainer:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginVertical: 15,
        marginLeft: 15,

    },
    name: {
        color: '#fff',
        fontSize: 15,
    },
    team:{
        color: '#fff',
        fontSize: 13,
    },
    scoreContainer:{
        flex: 1,
        justifyContent: 'center'
    },
})