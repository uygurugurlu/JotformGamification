
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
import {useSelector} from "react-redux";
import {getLeague} from "../../../utils/getLeague";


export default function RanksPage () {
    const [search, setSearch] = useState('');
    const sortedUserList1 = useSelector((state) => state.mainReducer.sortedUserList);
    const sortedUserList = sortedUserList1.map((item, index) =>
        ({...item, index: index})
    )
    const [userList, setUserList] = useState(sortedUserList);
    const user = useSelector((state) => state.mainReducer.user);
    const makeSearch = (key) => {
        setSearch(key)
        if(key.length >= 2) {
            setUserList(sortedUserList.filter(el => el.name.toLowerCase().includes(key)))
        }
        else
            setUserList(sortedUserList)
    }
    const renderItem = ({item, index}) => {
        if(item.index === 0) {
            return(
                <View style={styles.firstContainer}>
                    <Text style={styles.rankOneText}>1.</Text>
                    <Text style={styles.scoreText}>{"Score\n"+item.seasonScore}</Text>
                    <View style={styles.avatarContainer}>
                        <Image source={USERAVATAR1} style={styles.avatar}/>
                        <Image source={getLeagueImage(getLeague(1 , sortedUserList.length))} style={styles.leagueImage}/>
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
        else return (
            <RankCard
                rank={item.index +1}
                league={getLeague(item.index +1, sortedUserList.length)}
                avatar={USERAVATAR1}
                name={item.name}
                team={item.team}
                score={item.seasonScore}
                isMe={user.id === item.id}
            />
        )
    };
    const renderData = () => {
        if(userList.length === 0) {
            return(
                <Text style={styles.notFound}>No user found</Text>
            )
        }
        else return (
            <FlatList
                data={userList}
                renderItem={({item, index}) => renderItem({item, index})}
                keyExtractor={item => '' + item.id}
            />
        )
    }
    return (
        <Background>
                <SearchBar
                    placeholder={'Search User'}
                    onChangeText={(s) => makeSearch(s)}
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
                {renderData()}
                <View style={styles.divider}></View>
            </View>

        </Background>

    );
}
