import {StyleSheet} from "react-native";
import {DARKBLUE} from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: DARKBLUE,

    },
    firstContainer: {
        height: 190,
        justifyContent: 'center',
        marginTop: 20,
    },
    searchContainer: {
        backgroundColor: DARKBLUE,
        opacity: 0.9,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchInput: {
        color: '#fff'
    },
    rankOneText: {
        position: 'absolute',
        fontSize: 50,
        color:'#fff',
        left: 40
    },
    scoreText: {
        position: 'absolute',
        fontSize: 18,
        textAlign:'center',
        color:'#fff',
        right: 40
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
        height: 40,
        width: 40,
        top: 0,

    },
    textsContainer: {
        flex: 0.3,
        justifyContent: 'space-evenly'
    },
    nameText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    teamText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    divider: {
        marginVertical: 20
    },
    empty: {
        height: 100
    }
})
