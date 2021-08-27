import firebase from "firebase";
export const registerUser = async (user) => {
    return await firebase.database().ref('users/' + user.id).set({
        challenges :user.challenges,
        email: user.email,
        forms: user.forms,
        id: user.id,
        name: user.name,
        seasonScore: user.seasonScore,
        tasks: user.tasks,
        team: user.team,
        username: user.username,
        xp: user.xp
    });
}
