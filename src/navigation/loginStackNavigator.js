import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "../modules/app/LoginPage";
import RegisterPage from "../modules/app/RegisterPage";
import {ORANGE} from "../constants/colors";

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator
            initialRouteName="LoginPage"
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
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="RegisterPage" component={RegisterPage} />

        </Stack.Navigator>
    );
}
