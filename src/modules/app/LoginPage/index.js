import * as React from 'react';
import {View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import {Background} from "../../components/BackgroundComponent";
import {DEVICEHEIGHT, DEVICEWIDTH} from "../../../constants/general";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {firstTimeLogin, setBadges, setChallenges, setTasks, setUser} from "../../../store/Actions";
import {loginUser} from "../../../api/api";
import {readAsyncData} from "../../../utils/readAsyncData";
import {USER} from "../../../constants/asyncStorageKeys";
import {storeAsyncData} from "../../../utils/storeAsyncData";
import {getUserTasks} from "../../../utils/getUserTasks";
import {getUserChallenges} from "../../../utils/getUserChallenges";
import {getBadges} from "../../../utils/getBadges";
const getUserId = async (username) => {
    const ref = firebase.database().ref()

    let userID = -1, user = [];

    try {
        let val = [];
        await ref.child('users').orderByChild('username').equalTo(username).on("value", function(snapshot) {
            val = snapshot.val()
        });
        if(val.length == 0) {
            userID = -1
        }
        else {
            userID = val[0].id
            user = val[0]
        }
        return {userID, user}

    }
    catch (e) {
        console.log(e)
        return {userID,user}
    }
}

export default function LoginPage ({navigation}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('Mirac_Uygur');
    const [pass, setPass] = useState('Uygur2012...');
    const [badges, setBadgesState] = useState();

    const login = async (dispatch, username, pass) => {
        dispatch(setBadges(badges))

        try {
            let res = await loginUser(username, pass)
            let isSuccess = res.data.message == "success" ? true : false
            if(isSuccess) {

                let user = await getUserId(username)
                if(user.userID !== -1){
                    await storeAsyncData(USER, user.user)
                    dispatch(setTasks(await getUserTasks(user.userID)))
                    dispatch(setChallenges(await getUserChallenges(user.userID)))
                    dispatch(setBadges(badges))
                    dispatch(setUser(user.user))

                }else {
                    console.log("user not in firebase")
                }
            }
            else console.log("user login jotform failed")
        }
        catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getBadges().then(el => setBadgesState(el))
    }, [])
    useEffect(() => {
        firebase.database().ref('users/' + 0).on('value', async (snapshot) => {
            const user = snapshot.val();
            console.log(user);
            dispatch(setUser(user));
            dispatch(setTasks(await getUserTasks(user.id)))
            dispatch(setChallenges(await getUserChallenges(user.id)))
            dispatch(setBadges(await getBadges(badges)))
        });

    })
    return (
        <Background>
                <View style={{alignItems: 'center', justifyContent: 'center', height: DEVICEHEIGHT, width: DEVICEWIDTH }}>
                    <Text>Username: </Text>
                    <TextInput
                        onChangeText={setUsername}
                        value={username}
                        style={{height: 50, width: 200, borderWidth: 1, borderColor: 'rgb(50,50,50)', borderRadius: 10}}
                    />
                    <Text>Password: </Text>
                    <TextInput
                        onChangeText={setPass}
                        value={pass}
                        secureTextEntry={true}
                        style={{height: 50, width: 200, borderWidth: 1, borderColor: 'rgb(50,50,50)', borderRadius: 10}}
                    />
                    <Button title={"Login"} onPress={() => login(dispatch, username, pass, badges)} />

                    <TouchableOpacity style={{marginVertical: 20}} onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={{color:'rgb(100,100,100)'}}>Register</Text>
                    </TouchableOpacity>
                </View>
        </Background>

    );
}
