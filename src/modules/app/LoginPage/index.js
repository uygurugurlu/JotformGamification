import * as React from 'react';
import {View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import {Background} from "../../components/BackgroundComponent";
import {DEVICEHEIGHT, DEVICEWIDTH} from "../../../constants/general";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {firstTimeLogin, setUser} from "../../../store/Actions";



const setupUserListener = (userId) => {
    const dispatch = useDispatch();
    try {
        firebase.database().ref('users/' + userId).on('value', (snapshot) => {
            const user = snapshot.val();
            dispatch(setUser(user));
        });
        return null;
    }
    catch (e) {
        return e;
    }

}
const login = () => {
    setupUserListener(0)
}
export default function LoginPage ({navigation}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
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
                    <Button title={"Login"} onPress={login} />

                    <TouchableOpacity style={{marginVertical: 20}} onPress={() => navigation.navigate('RegisterPage')}>
                        <Text style={{color:'rgb(100,100,100)'}}>Register</Text>
                    </TouchableOpacity>
                </View>
        </Background>

    );
}
