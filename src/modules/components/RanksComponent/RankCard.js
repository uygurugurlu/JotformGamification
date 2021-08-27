import React from 'react';
import {Image, Text, View} from "react-native";
import {rankCardStyles} from "./styles";

import {getLeagueImage} from "../../../utils/getLeagueImage";
import {GREEN} from "../../../constants/colors";


export const RankCard = ({rank, league, avatar, name, team, score, isMe}) => {
    const renderMe = () => {
        return(isMe ? (<Text style={rankCardStyles.me}>{'<- Me'}</Text>): (<></>))
    }
    return(
        <View style={[rankCardStyles.container, isMe ? {backgroundColor: GREEN, borderRadius: 20,} : {}]}>
            <View style={rankCardStyles.rankContainer}>
                <Text style={rankCardStyles.rankText}>{rank+'.'}</Text>
            </View>
            <View style={rankCardStyles.avatarContainer}>
                <Image source={avatar} style={rankCardStyles.avatar}/>
                <Image source={getLeagueImage(league)} style={rankCardStyles.leagueImage}/>
            </View>
            <View style={rankCardStyles.nameContainer}>
                <View style={rankCardStyles.nameMe}>
                    <Text style={rankCardStyles.name}>{name}</Text>
                    {renderMe()}
                </View>
                <Text style={rankCardStyles.team}>{team}</Text>
            </View>
            <View style={rankCardStyles.scoreContainer}>
                <Text style={rankCardStyles.name}>{score}</Text>
            </View>
        </View>
    );
}
