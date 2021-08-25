
import * as React from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import {styles} from "./styles";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {useState} from "react";
import {TaskCard} from "../../components/TaskCardComponent";
import {getCardColor} from "../../../utils/getCardColor";
import {Background} from "../../components/BackgroundComponent";
import {useSelector} from "react-redux";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']

export default function TasksPage () {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tasks = useSelector((state) => state.mainReducer.tasks);
    const renderDailyTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === false && task.taskType === "daily")
        if(dailyTasks.length === 0){
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type}/>
            )} ));
    }
    const renderWeeklyTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === false && task.taskType === "weekly")
        if(dailyTasks.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type}/>
            )} ));
    }
    const renderCompletedTasks = () => {
        let dailyTasks = tasks.filter(task => task.isCompleted === true)
        if(dailyTasks.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( dailyTasks.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={getCardColor(x.id)} xp={x.xp} type={x.type}/>
            )} ));
    }
    const handleSelectedIndex = () => {
        let i = selectedIndex;
        if(i === 0) {
            return renderDailyTasks()
        }
        else if (i === 1){
            return renderWeeklyTasks()
        }
        else if (i ===2) {
            return renderCompletedTasks()
        }
    }

    return (
        <Background>
            <View style={styles.container}>
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
               <ScrollView>
                   {handleSelectedIndex()}
               </ScrollView>
            </View>
        </Background>


    );
}
