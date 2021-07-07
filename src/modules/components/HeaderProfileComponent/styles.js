import {StyleSheet} from "react-native";
import {ORANGE} from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: ORANGE,
        height: 70,
        flexDirection:'row',
        alignItems: 'center',
    },
    avatarContainer: {
        flex: 6.81,
        alignItems: 'center',
    },
    avatar: {
        height: 50,
        width: 50,
    },
    nameContainer: {
        flex: 13.47,
    },
    nameText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    levelContainer: {
        flex: 10.73,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row'

    },
    levelIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    levelPartContainer: {
        flex: 5.62,
        justifyContent:'center',
        alignItems:'center',
    },
    levelTextContainer: {
      flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:2,
    },
    levelProgressContainer: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:2,
    },
    levelText: {
        color:'#fff',
        textAlign:'center',
    },
    levelImage: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
    }
})
