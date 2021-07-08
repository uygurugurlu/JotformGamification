import React from 'react';
import {View} from "react-native";
import {styles} from "./styles";
import {RankCard} from "./RankCard";
import {BRONZE, DIAMOND, GOLD, PLATINUM, SILVER} from "../../../constants/ranks";
import {USERAVATAR1} from "../../../constants/images";

export const RanksComponent = () => {
    return(
        <View style={styles.container} opacity={0.9}>
            <RankCard rank={1} league={DIAMOND} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
            <RankCard rank={2} league={PLATINUM} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
            <RankCard rank={3} league={GOLD} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
            <RankCard rank={4} league={SILVER} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
            <RankCard rank={5} league={BRONZE} avatar={USERAVATAR1} name={"Uygur Uğurlu"} team={"Mobile Team"} score={200}/>
        </View>
    );
}
