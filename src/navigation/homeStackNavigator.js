import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../modules/app/HomePage";
import ChallengesPage from "../modules/app/ChallengesPage";
import FormsPage from "../modules/app/FormsPage";
import ProfilePage from "../modules/app/ProfilePage";
import RanksPage from "../modules/app/RanksPage";
import UsersListPage from "../modules/app/UsersListPage";
import {ORANGE} from "../constants/colors";
import { getHomePageTitle } from "../utils/getHomePageTitle";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator
                initialRouteName="HomePage"
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
                    name="HomePage"
                    component={HomePage}
                    options={{
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            backgroundColor: ORANGE,
                        },
                        title: getHomePageTitle()
                    }}
                />
                <Stack.Screen name="ChallengesPage" component={ChallengesPage} />
                <Stack.Screen name="FormsPage" component={FormsPage} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} />
                <Stack.Screen name="RanksPage" component={RanksPage} />
                <Stack.Screen name="UsersListPage" component={UsersListPage} />
            </Stack.Navigator>
    );
}
