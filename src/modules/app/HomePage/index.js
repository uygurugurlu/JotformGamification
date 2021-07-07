
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";


export default function HomePage ({ navigation }) {
    return (
        <View>
                <HeaderProfile avatar={USERAVATAR1} name={'Uygur Uğurlu'} level={'5'} progress={0.8}/>
            <Text>Home Page</Text>
            <Button
                title="Forms"
                onPress={() => navigation.navigate('FormsPage')}
            />
            <Button
                title="Ranks"
                onPress={() => navigation.navigate('RanksPage')}
            />
            <Button
                title="Tasks"
                onPress={() => navigation.navigate('Tasks')}
            />
            <Button
                title="Challenges"
                onPress={() => navigation.navigate('ChallengesPage')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Badges"
                onPress={() => navigation.navigate('BadgesPage')}
            />
        </View>
    );
}
