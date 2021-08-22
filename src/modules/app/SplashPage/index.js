
import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from "react-redux";
import { setSplashVisible, setUser} from "../../../store/Actions";
import {readAsyncData} from "../../../utils/readAsyncData";
import {USER} from "../../../constants/asyncStorageKeys";

async function closeSplash () {
    const dispatch = useDispatch();
    const userData =  await readAsyncData(USER)
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
    dispatch(setSplashVisible(false));
   return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Page</Text>
        </View>
    );
}
