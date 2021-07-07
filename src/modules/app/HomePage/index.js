
import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default function HomePage ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Page</Text>
            <Button
                title="Forms"
                onPress={() => navigation.navigate('FormsPage')}
            />
            <Button
                title="Ranks"
                onPress={() => navigation.navigate('RanksPage')}
            />
            <Button
                title="Tasks"
                onPress={() => navigation.navigate('Tasks')}
            />
            <Button
                title="Challenges"
                onPress={() => navigation.navigate('ChallengesPage')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Badges"
                onPress={() => navigation.navigate('Badges')}
            />
        </View>
    );
}
