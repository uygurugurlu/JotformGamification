import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../modules/app/HomePage";
import LoginPage from "../modules/app/LoginPage";

const Stack = createStackNavigator();

export default function CreateNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomePage">
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="Details" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
