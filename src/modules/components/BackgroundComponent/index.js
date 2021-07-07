import {View, Image} from "react-native";
import React from "react";
import {BACKGROUNDIMAGE} from "../../../constants/images";
import {styles} from "./styles";

export const Background = ({children}) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={BACKGROUNDIMAGE} style={styles.backImage}/>
            </View>
            {children}
        </View>
    )
}
