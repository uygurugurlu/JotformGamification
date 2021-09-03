import  React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import * as Progress from 'react-native-progress';
import {GREEN, ORANGE} from "../../../constants/colors";
import {getTeamLogo} from "../../../utils/getTeamLogo";
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import firebase from "firebase/app";

const handleClaimPress = (id, user, xp) => {
    console.log("xp: ",xp);
    const ref = firebase.database().ref('users/' + user.id + '/tasks');
    ref.on('value', (snapshot) => {
        snapshot.forEach(el => {
            if(el.val().id === id) {
                let oldVal = el.val()
                let key = el.key
                oldVal.isCompleted = true
                ref.child(key).update({isCompleted : true }).then(el => console.log('completed'))
            }
        })
    });
    firebase.database().ref('users').child(user.id).update({xp: (parseInt(user.xp) + 200), seasonScore: (parseInt(user.seasonScore) + 200)}).then(r => console.log('completed'));
}

const renderStatsOrClaim = (total, completed, xp,id ,user, isCompleted) => {

    if(completed >= total && isCompleted === false) {
        return (
            <AwesomeButtonRick
                type="primary"
                backgroundColor={ORANGE}
                backgroundDarker={'#be4e04'}
                textColor={'#fff'}
                onPress={() => handleClaimPress(id, user)}
                size={'small'}
                width={100}
            >
                Claim
            </AwesomeButtonRick>
        )
    }
    else {
        return (
            <>
                <Text style={styles.title}>
                    {xp + ' XP'}
                </Text>
                <Text style={styles.title}>
                    {completed + '/' + total}
                </Text>
            </>
        )

    }
}

export const TaskCard = ({title, color, xp, total, completed, type, color2, id, user, isCompleted, isExpanded = false}) => {
    return(
        <LinearGradient
            colors={color2 ? [color, color2] : [color, color]}
            style={styles.container}
            start={{x: 0.6, y: 0.2}}
            opacity={0.9}
        >
                <View style={styles.taskAvatarContainer}>
                    <View style={styles.taskAvatarBack}>
                        <Image source={getTeamLogo(type)} style={styles.taskAvatar}/>
                    </View>
                </View>
                <View style={styles.taskDetailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Progress.Bar
                        borderWidth={0}
                        width={null}
                        progress={1.0 * completed/total}
                        color={GREEN}
                        unfilledColor={'#fff'}
                    />
                </View>
                <View style={styles.taskStatsContainer}>
                    {renderStatsOrClaim(total,completed,xp,id, user, isCompleted, xp)}
                </View>

        </LinearGradient>


    );
}

