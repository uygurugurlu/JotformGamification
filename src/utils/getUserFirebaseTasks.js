import firebase from "firebase";

export const getUserFirebaseTasks = async (id) => {
    let db = firebase.database()
    let tasks = []
    await db.ref('users/' + id + '/tasks').on('value', (snapshot) => {
        tasks = snapshot.val()
    })
    return tasks

}
