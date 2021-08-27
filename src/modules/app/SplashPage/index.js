
import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from "react-redux";
import {setSortedUserList, setSplashVisible, setUser} from "../../../store/Actions";
import {readAsyncData} from "../../../utils/readAsyncData";
import {USER} from "../../../constants/asyncStorageKeys";
import {getSeasonRanks} from "../../../utils/getSeasonRanks";
import {useEffect} from "react";


 function closeSplash (dispatch) {
    const userData =  readAsyncData(USER)
    setTimeout(() => {
        if(userData === null) {
            dispatch(setUser(userData));
        }
        dispatch(setSplashVisible(false));


    }, 0)

}
export default function SplashPage () {
    const dispatch = useDispatch();
/*
    readAsyncData(USER).then(userData => {
        setTimeout(() => {
            if(userData === null) {
                dispatch(setUser(userData));
                dispatch(setSplashVisible(false));
            }
            else {
                dispatch(setSplashVisible(false));
            }
        }, 1000)
    })*/
    useEffect(() => {
        closeSplash(dispatch)
    })
   return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Page</Text>
        </View>
    );
}
