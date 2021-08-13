
import * as React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import ProgressWheel from "../../components/ProgressWheelComponent";
import {styles} from "./styles";
import {Background} from "../../components/BackgroundComponent";
import {useEffect, useState} from "react";

import {Divider} from "react-native-elements/dist/divider/Divider";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {TaskCard} from "../../components/TaskCardComponent";
import {BLUE, DARKBLUE, GREEN, RED, YELLOW} from "../../../constants/colors";
import {RanksComponent} from "../../components/RanksComponent";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import {firstTimeLogin, fetchUserForms} from "../../../store/Actions";
import {getFormDetail} from "../../../api/api";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']

const setForms = (forms) => {
    let formList = {}
    for (let i in forms) {

    }
    getFormDetail(id)
        .then(res => {
            console.log(res.data.content.title)
            return res.data.content.title
        }).catch(e => {
            return ""
        })
}
const renderFormItem =  (item) => (
    <TaskCard
        title={getFormDetail(item.item)}
        total={1}
        completed={0}
        color={DARKBLUE}
        xp={10}
        type={'mobile'}
    />
)
export default function HomePage ({navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [forms, setFormsState] = useState();
    const user = useSelector((state) => state.mainReducer.user);
    //const dispatch = useDispatch();
    //dispatch(fetchUserForms());

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
                <Text style={styles.sectionTitle}>Forms</Text>
                <FlatList
                    data={user.forms}
                    renderItem={renderFormItem}
                    keyExtractor={item => item}
                />
                <View  style={styles.space}/>
            </ScrollView>



        </Background>
    );
}

