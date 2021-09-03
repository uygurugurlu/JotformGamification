import firebase from "firebase";

export const getFirebaseTasks = async () => {
    let db = firebase.database()
    let tasks = []
    await db.ref('tasks').on('value',  (snapshot) => {
        tasks = snapshot.val()

    })
    return tasks

}
