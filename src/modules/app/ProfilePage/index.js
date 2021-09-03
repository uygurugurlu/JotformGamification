
import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from "./styles";
import {ProfileComponent} from "../../components/ProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import {DIAMOND} from "../../../constants/ranks";
import {Background} from "../../components/BackgroundComponent";
import {getLevelMaxXp} from "../../../utils/getLevelMaxXp";
import * as Progress from 'react-native-progress';
import {GREEN} from "../../../constants/colors";
import {Divider} from "react-native-elements/dist/divider/Divider";
import {useSelector} from "react-redux";
import {getCurrentLevel} from "../../../utils/getCurrentLevel";
import {getLeague} from "../../../utils/getLeague";

const data = [
    {id: 1, icon: require('../../../assets/badges/badge_0000_Katman-1.png'), name: 'badge1', owned: true},
    {id: 2, icon: require('../../../assets/badges/badge_0001_Katman-2.png'), name: 'badge2', owned: true},
    {id: 3, icon: require('../../../assets/badges/badge_0002_Katman-3.png'), name: 'badge3', owned: false},
    {id: 4, icon: require('../../../assets/badges/badge_0003_Katman-4.png'), name: 'badge4', owned: false},
    {id: 5, icon: require('../../../assets/badges/badge_0004_Katman-5.png'), name: 'badge5', owned: false},
    {id: 6, icon: require('../../../assets/badges/badge_0005_Katman-6.png'), name: 'badge6', owned: false},
    {id: 7, icon: require('../../../assets/badges/badge_0006_Katman-7.png'), name: 'badge7', owned: false},
    {id: 8, icon: require('../../../assets/badges/badge_0007_Katman-8.png'), name: 'badge8', owned: false},
    {id: 9, icon: require('../../../assets/badges/badge_0008_Katman-9.png'), name: 'badge9', owned: false},
    {id: 10, icon: require('../../../assets/badges/badge_0009_Katman-10.png'), name: 'badge10', owned: false},
    {id: 11, icon: require('../../../assets/badges/badge_0010_Katman-11.png'), name: 'badge11', owned: false},
    {id: 12, icon: require('../../../assets/badges/badge_0011_Katman-12.png'), name: 'badge12', owned: false},
    {id: 13, icon: require('../../../assets/badges/badge_0012_Katman-13.png'), name: 'badge13', owned: false},
    {id: 14, icon: require('../../../assets/badges/badge_0013_Katman-14.png'), name: 'badge14', owned: false},
    {id: 15, icon: require('../../../assets/badges/badge_0014_Katman-15.png'), name: 'badge15', owned: false},
    {id: 16, icon: require('../../../assets/badges/badge_0015_Katman-16.png'), name: 'badge16', owned: false},
    {id: 17, icon: require('../../../assets/badges/badge_0016_Katman-17.png'), name: 'badge17', owned: false},
    {id: 18, icon: require('../../../assets/badges/badge_0017_Katman-18.png'), name: 'badge18', owned: false},
    {id: 19, icon: require('../../../assets/badges/badge_0018_Katman-19.png'), name: 'badge19', owned: false},
    {id: 20, icon: require('../../../assets/badges/badge_0019_Katman-20.png'), name: 'badge20', owned: false},
    {id: 21, icon: require('../../../assets/badges/badge_0020_Katman-21.png'), name: 'badge21', owned: false},
];

export default function ProfilePage () {
    const user = useSelector((state) => state.mainReducer.user);
    const tasks = useSelector((state) => state.mainReducer.tasks);
    const challenges = useSelector((state) => state.mainReducer.challenges);
    const sortedUserList = useSelector((state) => state.mainReducer.sortedUserList);
    const findMe = () => {
        if(Array.isArray(sortedUserList)){
            return sortedUserList.findIndex(item => item.id === user.id)
        }
        else return -1
    }
    const renderBadges = () => {
        let vals = []
        for(let i = 0; i<data.length; i=i+7) {
            vals.push(
                <View key={data[i].id} style={styles.row}>
                    {renderItem(data[i])}
                    {renderItem(data[i+1])}
                    {renderItem(data[i+2])}
                    {renderItem(data[i+3])}
                    {renderItem(data[i+4])}
                    {renderItem(data[i+5])}
                    {renderItem(data[i+6])}
                </View>
            )
        }
        return (
            <View>
                {vals}
            </View>
        )
    }
    const renderItem = (item) => {
        return (
            <View style={styles.badgeIconContainer}>
                <Image source={item.icon} style={styles.badgeIcon} />
            </View>

        )
    }
    const completedTaskCount = (tasks) => {
        return tasks.filter(task => task.isCompleted === true).length
    }
    const completedChallenges = (challenges) => {
        return challenges.filter(challenge => challenge.isCompleted === true).length
    }
    return (
        <Background>
            <ScrollView style={styles.container}>
                <ProfileComponent
                    image={USERAVATAR1}
                    league={getLeague(findMe() + 1, sortedUserList.length)}
                    name={user.name}
                    team={user.team}
                    score={user.seasonScore}
                    rank={findMe() + 1}
                />
                <View style={styles.levelProgressContainer}>
                    <Text style={styles.titleText}>{'User Level: ' + getCurrentLevel(user).level}</Text>
                    <View style={styles.progressContainer}>
                        <Text style={styles.levelPrevText}>{getCurrentLevel(user).level}</Text>
                        <View style={styles.progress}>
                            <Progress.Bar
                                unfilledColor={'rgb(220,220,220)'}
                                borderColor={'rgba(0,0,0,0)'}
                                height={10}
                                progress={getCurrentLevel(user).progress}
                                width={290}
                                color={GREEN}
                            />
                        </View>
                        <Text style={styles.levelNextText}>{parseInt(getCurrentLevel(user).level) + 1}</Text>
                    </View>
                    <View style={styles.xpTextContainer}>
                        <Text style={styles.xpText}>
                            {user.xp + ' / ' + getLevelMaxXp(parseInt(getCurrentLevel(user).level))}
                        </Text>
                    </View>
                </View>
                <Divider style={styles.divider}/>
                <View style={styles.cardsContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Completed Tasks</Text>
                        <Text style={styles.cardStat}>{completedTaskCount(tasks)}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Completed Challenges</Text>
                        <Text style={styles.cardStat}>{completedChallenges(challenges)}</Text>

                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{'Badges\nOwned'}</Text>
                        <Text style={styles.cardStat}>2</Text>
                    </View>
                </View>
                <Divider style={styles.divider}/>
                <View style={styles.badgeContainer}>
                    <Text style={styles.sectionTitle}>Badges</Text>
                </View>
                {renderBadges()}
                <View style={{height: 700}} />
        </ScrollView>
    </Background>

);
}
