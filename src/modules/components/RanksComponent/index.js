import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./styles";
import {RankCard} from "./RankCard";
import {BRONZE, DIAMOND, GOLD, PLATINUM, SILVER} from "../../../constants/ranks";
import {USERAVATAR1} from "../../../constants/images";
import {DotsComponent} from "../DotsComponent";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Divider} from "react-native-elements/dist/divider/Divider";
import {ORANGE} from "../../../constants/colors";

export const RanksComponent = ({navigation}) => {
    return(
        <View style={styles.container} opacity={0.9}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Rank</Text>
                <Text style={styles.titleText}>Name</Text>
                <Text style={styles.titleText}>Score</Text>
            </View>
            <RankCard rank={1} league={DIAMOND} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={2345}/>
            <RankCard rank={2} league={PLATINUM} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={2245}/>
            <RankCard rank={3} league={GOLD} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={2134}/>
            <DotsComponent color={'#fff'} onPress={() => navigation.navigate('RanksPage')}/>
            <RankCard rank={92} league={SILVER} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
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
