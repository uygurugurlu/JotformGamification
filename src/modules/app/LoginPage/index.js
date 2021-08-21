import * as React from 'react';
import {View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import {Background} from "../../components/BackgroundComponent";
import {DEVICEHEIGHT, DEVICEWIDTH} from "../../../constants/general";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {firstTimeLogin, setUser} from "../../../store/Actions";
import {loginUser} from "../../../api/api";
import {readAsyncData} from "../../../utils/readAsyncData";
import {USER} from "../../../constants/asyncStorageKeys";
import {storeAsyncData} from "../../../utils/storeAsyncData";

const getUserId = (username) => {
    const ref = firebase.database().ref()
    let userID = -1, user = [];

    try {
        let val = [];
        ref.child('users').orderByChild('username').equalTo(username).on("value", function(snapshot) {
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
        return {userID,user}
    }
}
const login = async (dispatch, username, pass) => {
    let isSuccess = false
    await loginUser(username, pass)
        .then((res) => {
            isSuccess = res.data.message == "success" ? true : false})
        .catch(e => console.log(e));
    if(isSuccess) {
        let user = getUserId(username)
        if(user.userID !== -1){
            await storeAsyncData(USER, user.user)
            dispatch(setUser(user.user))
        }else {
            console.log("user not in firebase")
        }
    }
    else console.log("user login jotform failed")
}
export default function LoginPage ({navigation}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('Mirac_Uygur');
    const [pass, setPass] = useState('Uygur2012...');
    useEffect(() => {
        firebase.database().ref('users/' + 0).on('value', (snapshot) => {
            const user = snapshot.val();
            console.log(user);
            dispatch(setUser(user));
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
                        style={{height: 50, width: 200, borderWidth: 1, borderColor: 'rgb(50,50,50)', borderRadius: 10}}
                    />
                    <Button title={"Login"} onPress={() => login(dispatch, username, pass)} />

                    <TouchableOpacity style={{marginVertical: 20}} onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={{color:'rgb(100,100,100)'}}>Register</Text>
                    </TouchableOpacity>
                </View>
        </Background>

    );
}
