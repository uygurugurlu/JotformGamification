
import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from "./styles";
import {ProfileComponent} from "../../components/ProfileComponent";
import {USERAVATAR1} from "../../../constants/images";
import {DIAMOND} from "../../../constants/ranks";
import {Background} from "../../components/BackgroundComponent";
import {getLevelMaxXp} from "../../../utils/getLevelMaxXp";
import * as Progress from 'react-native-progress';
import {GREEN} from "../../../constants/colors";
import {Divider} from "react-native-elements/dist/divider/Divider";

export default function ProfilePage () {
    return (
        <Background>
            <ScrollView style={styles.container}>
                <ProfileComponent
                    image={USERAVATAR1}
                    league={DIAMOND}
                    name={"Uygur Uğurlu"}
                    team={"Mobile Team"}
                    score={2982}
                    rank={105}
                />
                <View style={styles.levelProgressContainer}>
                    <Text style={styles.titleText}>{'User Level: ' + 5}</Text>
                    <View style={styles.progressContainer}>
                        <Text style={styles.levelPrevText}>5</Text>
                        <View style={styles.progress}>
                            <Progress.Bar
                                unfilledColor={'rgb(220,220,220)'}
                                borderColor={'rgba(0,0,0,0)'}
                                height={10}
                                progress={0.5}
                                width={290}
                                color={GREEN}
                            />
                        </View>
                        <Text style={styles.levelNextText}>6</Text>
                    </View>
                    <View style={styles.xpTextContainer}>
                        <Text style={styles.xpText}>
                            {246 + ' / ' + getLevelMaxXp(15)}
                        </Text>
                    </View>
                </View>
                <Divider style={styles.divider}/>
                <View style={{height: 700}} />
        </ScrollView>
    </Background>

);
}
