
import * as React from 'react';
import {ScrollView, Text, TouchableOpacity, View, RefreshControl} from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import ProgressWheel from "../../components/ProgressWheelComponent";
import {styles} from "./styles";
import {Background} from "../../components/BackgroundComponent";
import {useEffect, useRef, useState} from "react";

import {Divider} from "react-native-elements/dist/divider/Divider";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {TaskCard} from "../../components/TaskCardComponent";
import {BLUE, DARKBLUE, GREEN, RED, YELLOW} from "../../../constants/colors";
import {RanksComponent} from "../../components/RanksComponent";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import {setSortedUserList, setTasks} from "../../../store/Actions";
import {getFormDetail, getFormQuestions} from "../../../api/api";
import {FillFormModal} from "../../components/FillFormModalComponent";
import firebase from "firebase";
import {getCardColor} from "../../../utils/getCardColor";
import {getCurrentLevel} from "../../../utils/getCurrentLevel";
import {getJiraTasks} from "../../../api/atlassianapi";
import {updateWeeklyTasks} from "../../../utils/updateWeeklyTasks";
import {getUserTasks} from "../../../utils/getUserTasks";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function HomePage ({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);


    const [selectedIndex, setSelectedIndex] = useState(0);
    const [forms, setFormsState] = useState();
    const [formModalVisible, setFormModalVisible] = useState(false);
    const [formContent, setFormContent] = useState();
    const [formId, setFormId] = useState();
    const user = useSelector((state) => state.mainReducer.user);
    const tasks = useSelector((state) => state.mainReducer.tasks);
    const challenges = useSelector((state) => state.mainReducer.challenges);
    const sortedUserList = useSelector((state) => state.mainReducer.sortedUserList);
    const dispatch = useDispatch();


    function handleFormClose() {
        setFormModalVisible(false)
        Promise.all(setForms(user.forms)).then((values) => {
            if(Array.isArray(values))
                setFormsState(values);
        });
    }

    const setForms = (forms) => {
        let formList = []
        for (let i in forms) {
            let formItem = getFormDetail(forms[i])
            formList.push(formItem)
        }
        return formList
    }
    const onRefresh = () => {
        setRefreshing(true);
        Promise.all(setForms(user.forms)).then((values) => {
            if(Array.isArray(values))
                setFormsState(values);
        });
        updateWeeklyTasks(user.id).then(async () => {
            dispatch(setTasks(await getUserTasks(user.id)))
            setRefreshing(false)
            console.log(user)
        });
    };
    const formPressed = async (item) => {

        setFormModalVisible(true)
        setFormContent(await getFormQuestions(item.data.content.id))
        setFormId(item.data.content.id)
    }
    const renderFormItem =  (item) => (
        <TouchableOpacity onPress={() => formPressed(item)} key={item.data.content.id}>
            <TaskCard
                title={item.data.content.title}
                total={1}
                completed={0}
                color={DARKBLUE}
                xp={15}
                type={'everyone'}
            />
        </TouchableOpacity>

    )
    const renderFormItems = (forms) => {
        if(forms == null || forms.length === 0) {
            return (
                <Text style={styles.notAvailable}>
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

    const mounted = useRef();

    useEffect(() => {
        updateWeeklyTasks(user.id);
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            Promise.all(setForms(user.forms)).then((values) => {
                if(Array.isArray(values))
                    setFormsState(values);
            });
        }
        const sub = firebase.database().ref('users').orderByChild('seasonScore').on('value', (snapshot) => {
            let users = []
            if(!snapshot) return false
            snapshot.forEach(child => {
                users.push({
                    key: child.key,
                    ...child.val()
                })
                return false
            })
            users = users.reverse()

            dispatch(setSortedUserList(users));
        });
        Promise.all(setForms(user.forms)).then((values) => {
            if(Array.isArray(values))
                setFormsState(values);
        });
        return () => {
            sub();
        }

    }, [user])
    const renderPinnedDailyTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === false && task.isPinned === true && task.taskType === "daily")
        if(dailyTasks.length === 0){
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type} id={x.id} user={user} isCompleted={x.isCompleted}/>
            )} ));
    }
    const renderPinnedWeeklyTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === false && task.isPinned === true && task.taskType === "weekly")
        if(dailyTasks.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type} id={x.id} user={user} isCompleted={x.isCompleted}/>
            )} ));
    }
    const renderPinnedCompletedTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === true && task.isPinned === true)
        if(dailyTasks.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type} id={x.id} user={user} isCompleted={x.isCompleted}/>
            )} ));
    }
    const handleSelectedIndex = () => {
        let i = selectedIndex;
        if(i === 0) {
            return renderPinnedDailyTasks()
        }
        else if (i === 1){
            return renderPinnedWeeklyTasks()
        }
        else if (i ===2) {
            return renderPinnedCompletedTasks()
        }
    }
    const getDailyPercent = () => {
        let completedDaily = tasks.filter(task => task.isCompleted === true && task.taskType === "daily").length
        let total = tasks.filter(task => task.taskType === "daily").length
        if(total === 0) return 0
        return completedDaily * 1.0 / total * 100
    }
    const getWeeklyPercent = () => {
        let completedWeekly = tasks.filter(task => task.isCompleted === true && task.taskType === "weekly").length
        let total = tasks.filter(task => task.taskType === "weekly").length
        if(total === 0) return 0
        return completedWeekly * 1.0 / total * 100
    }
    const renderPinnedChallenges = () => {
        let total = challenges.filter(challenge => challenge.isCompleted === false && challenge.isPinned === true)
        if(total.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( total.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={DARKBLUE} color2={RED} xp={x.xp} type={x.type}  id={x.id} user={user} isCompleted={x.isCompleted}/>
        )} ));
    }
    return (
        <Background>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                    <HeaderProfile avatar={USERAVATAR1} name={user.name} level={getCurrentLevel(user).level} progress={getCurrentLevel(user).progress}/>

                </TouchableOpacity>
                <View style={styles.progressWheelsContainer}>
                    <ProgressWheel percent={Math.round(getDailyPercent() * 100) / 100} text={'Daily Tasks'} wheelColor={GREEN} textColor={GREEN} />
                    <ProgressWheel percent={Math.round(getWeeklyPercent() * 100) / 100} text={'Weekly Tasks'} wheelColor={BLUE} textColor={BLUE} />
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

                {handleSelectedIndex()}

                <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
                    <Text style={styles.showMoreButton}>Show all</Text>
                </TouchableOpacity>
                <Divider style={{marginVertical: 10}}/>
                <Text style={styles.sectionTitle}>Season Ranks</Text>
                <RanksComponent
                    navigation={navigation}
                    sortedUserList={sortedUserList}
                    userId = {user.id}
                />
                <Divider style={{marginVertical: 10}}/>
                <Text style={styles.sectionTitle}>Challenges</Text>

                {renderPinnedChallenges()}

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
                formId={formId}
            />
        </Background>
    );
}

