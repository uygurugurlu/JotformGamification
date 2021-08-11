import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./homeStackNavigator";
import ProfileStack from "./profileStackNavigator";
import {NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TasksPage from "../modules/app/TasksPage";
import { createStackNavigator } from '@react-navigation/stack';
import {ORANGE} from "../constants/colors";
import {useSelector} from "react-redux";
import SplashPage from "../modules/app/SplashPage";
import LoginStack from "./loginStackNavigator";


const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff'
    },
};
const Stack = createStackNavigator();

function TasksScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: ORANGE
                },
                headerTitleStyle: {
                    color: '#fff'
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="Tasks"
                component={TasksPage}

/*
                options={{ title: 'My home' }}
*/
            />
        </Stack.Navigator>
    );
}

export default function CreateNavigation() {
    const splashVisible = useSelector((state) => state.mainReducer.splashVisible);
    const user = useSelector((state) => state.mainReducer.user);
    if(splashVisible)
        return <SplashPage />
    else if(user === null) {
        return (
            <NavigationContainer theme={MyTheme}>
                <LoginStack />
            </NavigationContainer>
            )
    }
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Tasks" component={TasksScreen} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
