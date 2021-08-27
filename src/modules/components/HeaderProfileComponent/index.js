
import * as React from 'react';
import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import {getLevelImage} from "../../../utils/getLevelImage";
import * as Progress from 'react-native-progress';
import {DARKBLUE} from "../../../constants/colors";

const renderLevelImage = (level) => {
    if(getLevelImage(level) !== "Error") {
        return(
            <Image source={getLevelImage(level)} style={styles.levelImage}/>
        )
    }
    return
}
export default function HeaderProfile ({avatar, name, level, progress}) {
    if(progress == NaN || progress > 1.0 || progress < 0.0) progress = 0.0
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={avatar} style={styles.avatar}/>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.levelContainer}>
                <View style={styles.levelIconContainer}>
                    {renderLevelImage(level)}
                </View>
                <View style={styles.levelPartContainer}>
                    <View style={styles.levelTextContainer}>
                        <Text style={styles.levelText}>{'Level '+ level}</Text>
                    </View>
                    <View style={styles.levelProgressContainer}>
                        <Progress.Bar progress={progress} width={85} color={DARKBLUE}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

