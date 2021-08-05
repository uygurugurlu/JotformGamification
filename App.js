import * as React from 'react';
import CreateNavigation from "./src/navigation/createNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from "./src/store/ConfigureStore";
import { Provider } from 'react-redux';
import firebase from "firebase/app";
import "firebase/database";

function storeHighScore(userId, score) {
    firebase
        .database()
        .ref('users/' + userId)
        .set({
            highscore: score,
        });
}
function setupHighscoreListener(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const highscore = snapshot.val().highscore;
        console.log("New high score: " + highscore);
    });
}

export default function App() {

    storeHighScore("20", 200);
    setupHighscoreListener("20");
    return (
        <Provider store={configureStore()}>
            <SafeAreaProvider>
                <CreateNavigation />
            </SafeAreaProvider>
        </Provider>

  );
}
