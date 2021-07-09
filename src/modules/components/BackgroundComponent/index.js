import {View, ImageBackground} from "react-native";
import React from "react";
import {BACKGROUNDIMAGE} from "../../../constants/images";
import {styles} from "./styles";

export const Background = ({children}) => {
    return (
        <View>
            <ImageBackground  
                source={BACKGROUNDIMAGE}
                style={styles.imageBackground}
                imageStyle={styles.image}
            >
                {children}
            </ImageBackground>
        </View>
    )
}
