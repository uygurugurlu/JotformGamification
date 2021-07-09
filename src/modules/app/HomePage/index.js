
import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import ProgressWheel from "../../components/ProgressWheelComponent";
import {styles} from "./styles";
import {Background} from "../../components/BackgroundComponent";
import {useState} from "react";

import {Divider} from "react-native-elements/dist/divider/Divider";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {TaskCard} from "../../components/TaskCardComponent";
import {BLUE, DARKBLUE, GREEN, RED, YELLOW} from "../../../constants/colors";
import {RanksComponent} from "../../components/RanksComponent";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']


export default function HomePage ({navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Background>
            <ScrollView>
                <HeaderProfile avatar={USERAVATAR1} name={'Uygur Uğurlu'} level={'12'} progress={0.8}/>
                <View style={styles.progressWheelsContainer}>
                    <ProgressWheel percent={50} text={'Daily Tasks'} wheelColor={GREEN} textColor={GREEN} />
                    <ProgressWheel percent={31} text={'Weekly Tasks'} wheelColor={BLUE} textColor={BLUE} />
                </View>
                <ButtonGroup
                    onPress={(i) => setSelectedIndex(i)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    textStyle={styles.buttonGroupTextStyle}
                    selectedTextStyle={styles.buttonGroupSelectedTextStyle}
                    selectedButtonStyle={styles.buttonGroupSelectedButtonStyle}
                    innerBorderStyle={styles.buttonGroupInnerBorderStyle}
                    containerStyle={styles.buttonGroupContainer}
                />

                <TaskCard title={"Fix User Login Bug"} total={10} completed={2} color={DARKBLUE} xp={89} type={'mobile'}/>
                <TaskCard title={"Fix User Login Bug"} total={10} completed={4} color={YELLOW} xp={89} type={'mobile'}/>
                <TaskCard title={"Fix User Login Bug"} total={10} completed={9} color={BLUE} xp={89} type={'mobile'}/>
                <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
                    <Text style={styles.showMoreButton}>Show all</Text>
                </TouchableOpacity>
                <Divider style={{marginVertical: 10}}/>
                <Text style={styles.sectionTitle}>Season Ranks</Text>
                <RanksComponent navigation={navigation}/>
                <Divider style={{marginVertical: 10}}/>
                <Text style={styles.sectionTitle}>Challenges</Text>
                <TaskCard title={"Make 1000 Commits"} total={1000} completed={22} color={DARKBLUE} color2={RED} xp={1000} type={'mobile'}/>
                <TaskCard title={"Make 1000 Commits"} total={1000} completed={22} color={DARKBLUE} color2={RED} xp={1000} type={'mobile'}/>
                <TaskCard title={"Make 1000 Commits"} total={1000} completed={22} color={DARKBLUE} color2={RED} xp={1000} type={'mobile'}/>
                <TouchableOpacity onPress={() => navigation.navigate('ChallengesPage')}>
                    <Text style={styles.showMoreButton}>Show all</Text>
                </TouchableOpacity>
                <View  style={styles.space}/>
            </ScrollView>



        </Background>
    );
}
