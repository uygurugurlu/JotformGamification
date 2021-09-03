import firebase from "firebase/app";

export const getBadges = async () => {
        let badges = [];
        try {
            await firebase.database().ref('badges').on('value', (snapshot) => {
                badges = snapshot.val();
            })
        }
        catch (e) {
            return 0
        }

        return badges;


}
