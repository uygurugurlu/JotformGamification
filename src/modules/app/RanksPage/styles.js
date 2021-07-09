import {StyleSheet} from "react-native";
import {MARGINHORIZONTAL} from "../../../constants/general";
import {DARKBLUE} from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: DARKBLUE,

    },
    firstContainer: {
        height: 150,
        backgroundColor: 'red'
    },
    avatarContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    leagueImage: {
        position: 'absolute',
        height: 80,
        width: 80,
        alignSelf: 'center',
    },
    avatar: {
        position: 'absolute',
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    crown: {
        position: 'absolute',
        height: 50,
        width: 50,
        top: 7,

    }
})
