
import * as React from 'react';
import { View, Text , Image} from 'react-native';
import {styles} from "./styles";
import {getLevelImage} from "../../../functions/getLevelImage";
import * as Progress from 'react-native-progress';
import {DARKBLUE} from "../../../constants/colors";


export default function HeaderProfile ({avatar, name, level, progress}) {
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
                    <Image source={getLevelImage(level)} style={styles.levelImage}/>
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

