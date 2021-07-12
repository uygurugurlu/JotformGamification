
import * as React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from "./styles";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {useState} from "react";
import {TaskCard} from "../../components/TaskCardComponent";
import {getCardColor} from "../../../utils/getCardColor";
import {Background} from "../../components/BackgroundComponent";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']

const data = [
    {id:1, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    {id:2, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    {id:3, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    {id:4, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    {id:5, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    {id:6, title: 'Task Card Title', total: 15, completed: 10, xp: 64, type: 'mobile'},
    ];

export default function TasksPage () {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const renderItem = ({item}) => (
        <TaskCard
            title={item.title}
            total={item.total}
            completed={item.completed}
            color={getCardColor()}
            xp={item.xp}
            type={item.type}/>

    )
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
                <FlatList data={data} renderItem={renderItem} keyExtractor={(i) => '' + i.id}/>
            </View>
        </Background>


    );
}
