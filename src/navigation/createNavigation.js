import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./homeStackNavigator";
import ProfileStack from "./profileStackNavigator";
import {NavigationContainer} from "@react-navigation/native";
import TasksPage from "../modules/app/TasksPage";


const Tab = createBottomTabNavigator();

export default function CreateNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Tasks" component={TasksPage} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
