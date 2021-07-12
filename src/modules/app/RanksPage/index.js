
import * as React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {styles} from "./styles";
import {RankCard} from "../../components/RanksComponent/RankCard";
import {DIAMOND} from "../../../constants/ranks";
import {KINGCROWN, USERAVATAR1} from "../../../constants/images";
import {Background} from "../../components/BackgroundComponent";
import {getLeagueImage} from "../../../utils/getLeagueImage";
import {Divider} from "react-native-elements/dist/divider/Divider";
import {SearchBar} from "react-native-elements/dist/searchbar/SearchBar";
import {useState} from "react";
import {SEARCH} from "../../../constants/icons";

const data= [
    {rank: 1, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "2345"},
    {rank: 2, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "2145"},
    {rank: 3, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "1845"},
    {rank: 4, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "1745"},
    {rank: 5, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "1645"},
    {rank: 6, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "1345"},
    {rank: 7, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "1145"},
    {rank: 8, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "345"},
    {rank: 9, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "45"},
    {rank: 10, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "5"},
    {rank: 11, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "2"},
    {rank: 12, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "2"},
    {rank: 13, avatar:USERAVATAR1, name: "Uygur Uğurlu", team: 'Mobile Team', score: "2"},
];


export default function RanksPage () {
    const [search, setSearch] = useState('');
    const renderItem = ({ item }) => {
        if(item.rank === 1) {
            return(
                <View style={styles.firstContainer}>
                    <Text style={styles.rankOneText}>1.</Text>
                    <Text style={styles.scoreText}>{"Score\n"+item.score}</Text>
                    <View style={styles.avatarContainer}>
                        <Image source={item.avatar} style={styles.avatar}/>
                        <Image source={getLeagueImage(DIAMOND)} style={styles.leagueImage}/>
                        <Image source={KINGCROWN} style={styles.crown}/>
                    </View>
                    <View style={styles.textsContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.teamText}>{item.team}</Text>

                    </View>
                    <Divider  style={styles.divider}/>
                </View>
            );
        }
        else return <RankCard rank={item.rank} league={DIAMOND} avatar={item.avatar} name={item.name} team={item.team} score={item.score}/>
    };
    return (
        <Background>
                <SearchBar
                    placeholder={'Search User'}
                    onChangeText={(s) => setSearch(s)}
                    value={search}
                    containerStyle={styles.searchContainer}
                    placeholderTextColor={'rgb(220,220,220)'}
                    inputStyle={styles.searchInput}
                    searchIcon={SEARCH}
                    leftIcon={SEARCH}
                    lightTheme={true}
                    showCancel={true}
                    cancelButtonProps={false}
                    cancelButtonTitle={false}
                    round={false}
                />
            <View style={styles.container} opacity={0.9}>

                <FlatList data={data} renderItem={renderItem} keyExtractor={item => '' + item.rank}/>
            </View>

        </Background>

    );
}
