import firebase from "firebase";

export const getUserChallenges = async (userId) => {
    let db = firebase.database()
    let createdChallenges = []
    let userChallenges = []
    let challenges = []
    await db.ref('users/' + userId + '/challenges').on('value', (snapshot) => {
        userChallenges = snapshot.val()
    })
    await db.ref('challenges').on('value',  (snapshot) => {
        challenges = snapshot.val()
        try {
            userChallenges.forEach(el => {
                for(let i=0; i<challenges.length; i++){
                    if(el.id === challenges[i].id) {
                        createdChallenges.push({
                            id: challenges[i].id,
                            title: challenges[i].title,
                            total: challenges[i].total,
                            type: challenges[i].type,
                            xp: challenges[i].xp,
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
    return createdChallenges

}
