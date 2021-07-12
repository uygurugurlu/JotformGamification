
import * as React from 'react';
import { View, Text } from 'react-native';
import {styles} from "./styles";
import {ProfileComponent} from "../../components/ProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import {DIAMOND} from "../../../constants/ranks";


export default function ProfilePage () {
    return (
        <View style={styles.container}>
            <ProfileComponent image={USERAVATAR1} league={DIAMOND} name={"Uygur Uğurlu"} team={"Mobile Team"} score={2982} rank={105}/>
            <Text>Profile Page</Text>
        </View>
    );
}
