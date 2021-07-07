import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgesPage from "../modules/app/BadgesPage";
import ProfilePage from "../modules/app/ProfilePage";

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
            <Stack.Navigator initialRouteName="ProfilePage">
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="BadgesPage" component={BadgesPage} />

            </Stack.Navigator>
    );
}
