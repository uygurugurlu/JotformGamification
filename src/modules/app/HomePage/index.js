
import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
import {firstTimeLogin, fetchUserForms, setUser} from "../../../store/Actions";
import {getFormDetail, getFormQuestions} from "../../../api/api";
import {FillFormModal} from "../../components/FillFormModalComponent";
import firebase from "firebase";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']


export default function HomePage ({navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [forms, setFormsState] = useState();
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formContent, setFormContent] = useState();
    const user = useSelector((state) => state.mainReducer.user);
    function handleFormClose() {
        setFormModalVisible(false)
    }

    const setForms = (forms) => {
        let formList = []
        for (let i in forms) {
            let formItem = getFormDetail(forms[i])
            formList.push(formItem)
        }
        return formList
    }
    const formPressed = async (item) => {
        setFormModalVisible(true)
        setFormContent(await getFormQuestions(item.data.content.id))
    }
    const renderFormItem =  (item) => (
        <TouchableOpacity onPress={() => formPressed(item)} key={item.data.content.id}>
            <TaskCard
                title={item.data.content.title}
                total={1}
                completed={0}
                color={DARKBLUE}
                xp={15}
                type={'mobile'}
            />
        </TouchableOpacity>

    )
    const renderFormItems = (forms) => {
        if(forms == null || forms.length === 0) {
            return (
                <Text>
                    There is no available form
                </Text>
            )
        }
        else{
            let items = [];
            for(let i in forms){
                items.push(renderFormItem(forms[i]))
            }
            return (
                <View>
                    {items}
                </View>
            )
        }
    }

    const getCurrentLevel = () => {
        try {
            let levels = []
            firebase.database().ref('levelRange').on('value', (snapshot) => {
                levels = snapshot.val();
            })
            if(levels.length === 0) return({level: "0", progress: 0.0})
            let level = 1
            levels.forEach(e => {
                if (user.xp > e) level++
            })
            let progress = (user.xp - levels[level]) * 1.0 / (levels[level+1] - levels[level])
            return({level: ""+level, progress: progress})
        }
        catch (e) {
            return({level: "0", progress: 0.0})
        }
    }

    //const dispatch = useDispatch();
    //dispatch(fetchUserForms());
    useEffect(() => {
        Promise.all(setForms(user.forms)).then((values) => {
            if(Array.isArray(values))
                setFormsState(values);
        });
    })

    return (
        <Background>
            <ScrollView>
                <HeaderProfile avatar={USERAVATAR1} name={user.name} level={getCurrentLevel().level} progress={getCurrentLevel().progress}/>
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
                {renderFormItems(forms)}
                <View  style={styles.space}/>
            </ScrollView>
            <FillFormModal
                visible={formModalVisible}
                setNotVisible={() => handleFormClose()}
                formContent={formContent}
            />

        </Background>
    );
}

