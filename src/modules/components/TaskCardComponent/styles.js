import {StyleSheet} from "react-native";
import {DEVICEWIDTH} from "../../../constants/general";

export const styles = StyleSheet.create({
    container: {
        height: 70,
        width: DEVICEWIDTH - 48,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
    },
    taskAvatarContainer: {
        flex: 6.12,
        justifyContent:'center',
        alignItems:'center'
    },
    taskAvatarBack: {
       height: 50,
       width: 50,
       backgroundColor: '#fff',
       borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center'
    },
    taskAvatar: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    taskDetailsContainer: {
        flex: 12,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginVertical: 10,
        marginBottom:15,
        marginRight: 15
    },
    title: {
        color:'#fff',
        fontSize: 15,
    },
    taskStatsContainer: {
        flex: 5,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginVertical: 10,
        marginBottom:15,
    }



});
