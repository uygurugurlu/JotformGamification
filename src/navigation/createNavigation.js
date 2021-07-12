import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./homeStackNavigator";
import ProfileStack from "./profileStackNavigator";
import {NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TasksPage from "../modules/app/TasksPage";
import { createStackNavigator } from '@react-navigation/stack';
import {ORANGE} from "../constants/colors";


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
