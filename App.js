import * as React from 'react';
import CreateNavigation from "./src/navigation/createNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from "./src/store/ConfigureStore";
import { Provider } from 'react-redux';
import firebase from "firebase/app";
import "firebase/database";
import {storeAsyncData} from "./src/utils/storeAsyncData";
import {readAsyncData} from "./src/utils/readAsyncData";
import {firebaseConfig} from "./firebase";

function storeHighScore(userId, score) {
    firebase
        .database()
        .ref('users/' + userId)
        .set({
            highscore: score,
        });
}
function setupUserListener(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const user = snapshot.val();
        console.log("user: " + user);
    });
}
firebase.initializeApp(firebaseConfig);

export default function App() {
    return (
        <Provider store={configureStore()}>
            <SafeAreaProvider>
                <CreateNavigation />
            </SafeAreaProvider>
        </Provider>

  );
}
