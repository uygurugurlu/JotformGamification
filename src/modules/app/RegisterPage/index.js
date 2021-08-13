import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useState} from "react";
import {Background} from "../../components/BackgroundComponent";
import {DEVICEHEIGHT, DEVICEWIDTH} from "../../../constants/general";
import {loginUser} from "../../../api/api";
import firebase from "firebase";

const doesContainUsername = (username) => {
    const ref = firebase.database().ref()

    let val = -1;
    ref.child('users').orderByChild('username').equalTo(username).on("value", function(snapshot) {
        val = snapshot.val().length
    });
    return val !== 0;
}

const register = (username, pass) => {
    if(doesContainUsername(username)){
        alert("user already registered");
        return
    }
    loginUser(username, pass)
        .then((res) => {
            console.log(res);})  //FIX MEEEEEEEEEE
        .catch(e => console.log(e));
}
export default function RegisterPage ({navigation}) {
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
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
                <Button title={"Register"} onPress={() => register(username, pass)} />

            </View>
        </Background>

    );
}
