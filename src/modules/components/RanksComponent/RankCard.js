import React from 'react';
import {Image, Text, View} from "react-native";
import {rankCardStyles} from "./styles";

import {getLeagueImage} from "../../../utils/getLeagueImage";


export const RankCard = ({rank, league, avatar, name, team, score }) => {
    return(
        <View style={rankCardStyles.container}>
            <View style={rankCardStyles.rankContainer}>
                <Text style={rankCardStyles.rankText}>{rank+'.'}</Text>
            </View>
            <View style={rankCardStyles.avatarContainer}>
                <Image source={avatar} style={rankCardStyles.avatar}/>
                <Image source={getLeagueImage(league)} style={rankCardStyles.leagueImage}/>
            </View>
            <View style={rankCardStyles.nameContainer}>
                <Text style={rankCardStyles.name}>{name}</Text>
                <Text style={rankCardStyles.team}>{team}</Text>
            </View>
            <View style={rankCardStyles.scoreContainer}>
                <Text style={rankCardStyles.name}>{score}</Text>
            </View>
        </View>
    );
}
