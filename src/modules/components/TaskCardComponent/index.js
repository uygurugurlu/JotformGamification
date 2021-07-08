import  React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import * as Progress from 'react-native-progress';
import {GREEN} from "../../../constants/colors";
import {getTeamLogo} from "../../../functions/getTeamLogo";

export const TaskCard = ({title, color, xp, total, completed, type}) => {
    return(
        <View style={[styles.container, {backgroundColor: color}]}>
            <View style={styles.taskAvatarContainer}>
                <View style={styles.taskAvatarBack}>
                    <Image source={getTeamLogo(type)} style={styles.taskAvatar}/>
                </View>
            </View>
            <View style={styles.taskDetailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Progress.Bar width={null} progress={1.0 * completed/total} color={GREEN} unfilledColor={'#fff'}/>
            </View>
            <View style={styles.taskStatsContainer}>
                <Text style={styles.title}>
                    {xp + ' XP'}
                </Text>
                <Text style={styles.title}>
                    {completed + '/' + total}
                </Text>
            </View>

        </View>
    );
}
