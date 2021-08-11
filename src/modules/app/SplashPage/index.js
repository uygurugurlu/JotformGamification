
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {firstTimeLogin, setSplashVisible, setUser} from "../../../store/Actions";
import {readAsyncData} from "../../../utils/readAsyncData";
import {USER} from "../../../constants/asyncStorageKeys";

async function closeSplash () {
    const dispatch = useDispatch();
    const userData =  await readAsyncData(USER)
    setTimeout(() => {
        if(userData === null) {
            dispatch(setUser(userData));
            dispatch(setSplashVisible(false));
        }
        else {
            dispatch(setSplashVisible(false));
        }
    }, 1000)

}
export default function SplashPage () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.mainReducer.user);
    closeSplash();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Page</Text>
        </View>
    );
}
