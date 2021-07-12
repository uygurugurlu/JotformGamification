import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./styles";
import {getLeagueImage} from "../../../utils/getLeagueImage";

export const ProfileComponent = ({image, league, name, team, score, rank}) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.profileImage} />
                <Image source={getLeagueImage(league)} style={styles.leagueImage} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.teamText}>{team}</Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>
                    {'Season\nScore'}
                </Text>
                <Text style={styles.score}>
                    {score}
                </Text>
            </View>
            <View style={styles.rankContainer}>
                <Text style={styles.scoreText}>
                    {'Season\nRank'}
                </Text>
                <Text style={styles.score}>
                    {rank}
                </Text>
            </View>

        </View>
    )
}
