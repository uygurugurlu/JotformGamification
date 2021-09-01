import React, {useState} from 'react';
import {Text, View} from "react-native";
import {styles} from "./styles";
import {RankCard} from "./RankCard";
import {BRONZE, DIAMOND, GOLD, PLATINUM, SILVER} from "../../../constants/ranks";
import {USERAVATAR1} from "../../../constants/images";
import {DotsComponent} from "../DotsComponent";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Divider} from "react-native-elements/dist/divider/Divider";
import {ORANGE} from "../../../constants/colors";
import {getLeague} from "../../../utils/getLeague";

export const RanksComponent = ({navigation, sortedUserList, userId}) => {
    const isTopThree = () => {
        if(sortedUserList.length === 0) return false
        for(let i =0; i<3 && i<sortedUserList.length; i++) {
            if(sortedUserList[i].id  === userId)
                return true
        }
        return false
    }
    const renderTopThree = (sortedUserList) => {
        if(sortedUserList.length === 0) return
        let arr = []
        for(let i =0; i<3 && i<sortedUserList.length; i++) {
            arr.push(
                <RankCard
                    key={sortedUserList[i].id}
                    rank={i+1} league={getLeague(i+1, sortedUserList.length)}
                    avatar={USERAVATAR1}
                    name={sortedUserList[i].name}
                    team={sortedUserList[i].team}
                    score={sortedUserList[i].seasonScore}
                    isMe={userId === sortedUserList[i].id}
                />
            )
        }
        return (
            <View>
                {arr}
            </View>
        )

    }
    const findMe = () => {
        if(Array.isArray(sortedUserList)){
            return sortedUserList.findIndex(item => item.id === userId)
        }
        else return -1
    }
    const renderMe = () => {
        let me = findMe()
        if(me === -1) return
        return(
            isTopThree() ?
                (<></>) :
                (
                    <>
                        <DotsComponent color={'#fff'} onPress={() => navigation.navigate('RanksPage')}/>
                        <RankCard
                            rank={me+1}
                            league={getLeague(me+1, sortedUserList.length)}
                            avatar={USERAVATAR1}
                            name={sortedUserList[me].name}
                            team={sortedUserList[me].team}
                            score={sortedUserList[me].seasonScore}
                            isMe={true}
                        />
                    </>
            )
        )
    }
    return(
        <View style={styles.container} opacity={0.9}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Rank</Text>
                <Text style={styles.titleText}>Name</Text>
                <Text style={styles.titleText}>Score</Text>
            </View>

            {renderTopThree(sortedUserList)}
            {renderMe()}
            <Divider color={'rgb(200,200,200)'} style={styles.divider}/>
            <View style={styles.buttonContainer}>
                <AwesomeButtonRick
                    type="primary"
                    backgroundColor={ORANGE}
                    backgroundDarker={'#be4e04'}
                    textColor={'#fff'}
                    onPress={() => navigation.navigate('RanksPage')}
                >
                    See All Rankings
                </AwesomeButtonRick>
            </View>

        </View>
    );
}
