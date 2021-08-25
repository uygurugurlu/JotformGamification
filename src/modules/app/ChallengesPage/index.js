
import * as React from 'react';
import {View, FlatList, Text, ScrollView} from 'react-native';
import {styles} from "./styles";
import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";
import {useState} from "react";
import {TaskCard} from "../../components/TaskCardComponent";
import {getCardColor} from "../../../utils/getCardColor";
import {Background} from "../../components/BackgroundComponent";
import {useSelector} from "react-redux";
import {DARKBLUE, RED} from "../../../constants/colors";

const buttons = ['Challenges', 'Completed']

export default function ChallengesPage () {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const challenges = useSelector((state) => state.mainReducer.challenges);

    const renderChallenges = () => {
        let total = challenges.filter(challenge => challenge.isCompleted === false)
        if(total.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( total.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={DARKBLUE} color2={RED} xp={x.xp} type={x.type}/>
            )} ));
    }
    const renderCompletedChallenges = () => {
        let total = challenges.filter(challenge => challenge.isCompleted === true)
        if(total.length === 0) {
            return (<Text style={styles.notAvailable}>There is no available tasks to show</Text>)
        }
        return( total.map( (x) => {
            return(
                <TaskCard key={x.id} title={x.title} total={x.total} completed={x.completed} color={DARKBLUE} color2={RED} xp={x.xp} type={x.type}/>
            )} ));
    }
    const handleSelectedIndex = () => {
        let i = selectedIndex;
        if(i === 0) {
            return renderChallenges()
        }
        else if (i === 1){
            return renderCompletedChallenges()
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
