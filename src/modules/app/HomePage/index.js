
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import ProgressWheel from "../../components/ProgressWheelComponent";
import {styles} from "./styles";
import {Background} from "../../components/BackgroundComponent";


export default function HomePage ({ navigation }) {
    return (
        <Background>
            <HeaderProfile avatar={USERAVATAR1} name={'Uygur Uğurlu'} level={'12'} progress={0.8}/>
            <View style={styles.progressWheelsContainer}>
                <ProgressWheel percent={50} text={'Daily Tasks'} wheelColor={'blue'} textColor={'red'} />
                <ProgressWheel percent={31} text={'Weekly Tasks'} wheelColor={'blue'} textColor={'red'} />
            </View>

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
        </Background>
    );
}
