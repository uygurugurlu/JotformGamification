import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

export const DotsComponent = ({color, onPress}) => {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.topacity}>

                <View style={[styles.dot, {backgroundColor: color}]} />
                <View style={[styles.dot, {backgroundColor: color}]} />
                <View style={[styles.dot, {backgroundColor: color}]} />
            </TouchableOpacity>
        </View>
    );
}
