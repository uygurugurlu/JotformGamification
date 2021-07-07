
import * as React from 'react';
import { View, Text } from 'react-native';
import {styles} from "./styles";
import SemiCircleProgress from "react-native-semi-circle-progress";
import {DARKBLUE} from "../../../constants/colors";




export default function ProgressWheel ({percent, text, wheelColor, textColor}) {
    return (
        <View style={styles.container}>
            <SemiCircleProgress
                percentage={percent}
                progressColor={wheelColor}
                circleRadius={80}
                progressShadowColor={'rgb(226,225,225)'}
                animationSpeed={0}
            >
                <Text style={[ styles.percentText , { color: textColor }]}>{percent+'%'}</Text>
                <Text style={[ styles.infoText , { color: DARKBLUE }]}>{text}</Text>

            </SemiCircleProgress>

        </View>
    );
}

