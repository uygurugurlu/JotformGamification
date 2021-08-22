import {StyleSheet} from "react-native";
import {DEVICEHEIGHT, DEVICEWIDTH, MARGINHORIZONTAL} from "../../../constants/general";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: DEVICEHEIGHT - 200,
        width: DEVICEWIDTH - MARGINHORIZONTAL * 2,
        backgroundColor: 'white',
        borderRadius: 20
    },
    closeButton: {
        alignItems:'flex-end'
    },
    divider: {
        height: 1,
        width: DEVICEWIDTH - MARGINHORIZONTAL * 2,
        backgroundColor: 'rgb(200,200,200)',
        marginVertical: 10
    },
    header: {
        textAlign:'center',
        fontSize: 15,
        fontWeight:'700',
        color: 'rgb(30,30,30)',
        marginVertical: 10
    },
    subSectionHeader: {
        fontSize: 15,
        fontWeight: '700',
        color: 'rgb(50,50,50)',
        marginLeft: 10,
        marginVertical: 10
    },
    subLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: 'rgb(100,100,100)',
        marginLeft: 10,
        marginBottom: 10
    },
    input: {
        height: 40,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'rgb(50,50,50)',
        padding: 10
    },
    picker: {
        height: 40,
    },
    submitContainer: {
        alignItems: 'center'
    }
})
