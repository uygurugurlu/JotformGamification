
import * as React from 'react';
import { View, Text } from 'react-native';
import {styles} from "./styles";
import SemiCircleProgress from "react-native-semi-circle-progress";




export default function ProgressWheel ({percent, text, wheelColor, textColor}) {
    return (
        <View style={styles.container}>
            <SemiCircleProgress
                percentage={percent}
                progressColor={wheelColor}
                circleRadius={90}

            >
                <Text style={[ styles.percentText , { color: textColor }]}>{percent+'%'}</Text>
            </SemiCircleProgress>
            <Text style={[ styles.infoText , { color: textColor }]}>{text}</Text>

        </View>
    );
}

