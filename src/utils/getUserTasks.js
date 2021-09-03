import firebase from "firebase";

export const getUserTasks = async (userId) => {
    let db = firebase.database()
    let createdTasks = []
    let userTasks = []
    let tasks = []
    await db.ref('users/' + userId + '/tasks').on('value', (snapshot) => {
        userTasks = snapshot.val()
    })
    await db.ref('tasks').on('value',  (snapshot) => {
        tasks = snapshot.val()

        try {
            userTasks.forEach(el => {
                for(let i=0; i<tasks.length; i++){
                    if(el.id === tasks[i].id) {
                        createdTasks.push({
                            id: tasks[i].id,
                            taskType: tasks[i].taskType,
                            title: tasks[i].title,
                            total: tasks[i].total,
                            type: tasks[i].type,
                            xp: tasks[i].xp,
                            completed: el.completed,
                            isClaimed: el.isClaimed,
                            isCompleted: el.isCompleted,
                            isPinned: el.isPinned
                        })
                    }
                }
            })
        }
        catch (e){
            console.log(e)
        }
    })
    return createdTasks

}
