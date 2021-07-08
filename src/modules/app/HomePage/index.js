
import * as React from 'react';
import { View } from 'react-native';
import HeaderProfile from "../../components/HeaderProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import ProgressWheel from "../../components/ProgressWheelComponent";
import {styles} from "./styles";
import {Background} from "../../components/BackgroundComponent";
import {useState} from "react";

import {ButtonGroup} from "react-native-elements/dist/buttons/ButtonGroup";

const buttons = ['Daily Tasks', 'Weekly Tasks', 'Completed']


export default function HomePage () {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Background>
            <HeaderProfile avatar={USERAVATAR1} name={'Uygur Uğurlu'} level={'12'} progress={0.8}/>
            <View style={styles.progressWheelsContainer}>
                <ProgressWheel percent={50} text={'Daily Tasks'} wheelColor={'#0fbf0f'} textColor={'#0fbf0f'} />
                <ProgressWheel percent={31} text={'Weekly Tasks'} wheelColor={'#3068c6'} textColor={'#3068c6'} />
            </View>
            <ButtonGroup
                onPress={(i) => setSelectedIndex(i)}
                selectedIndex={selectedIndex}
                buttons={buttons}
                textStyle={styles.buttonGroupTextStyle}
                selectedTextStyle={styles.buttonGroupSelectedTextStyle}
                selectedButtonStyle={styles.buttonGroupSelectedButtonStyle}
                innerBorderStyle={styles.buttonGroupInnerBorderStyle}
            />


        </Background>
    );
}
