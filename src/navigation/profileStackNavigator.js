import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgesPage from "../modules/app/BadgesPage";
import ProfilePage from "../modules/app/ProfilePage";
import {ORANGE} from "../constants/colors";

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
            <Stack.Navigator
                initialRouteName="ProfilePage"
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
                    name="ProfilePage"
                    component={ProfilePage}
                    options={{
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            backgroundColor: ORANGE,
                        },
                        title: 'Profil'
                    }}
                />
                <Stack.Screen name="BadgesPage" component={BadgesPage} />

            </Stack.Navigator>
    );
}
