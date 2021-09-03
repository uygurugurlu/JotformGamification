import firebase from "firebase";

export const getCurrentLevel = (user) => {
    try {
        let levels = []
        firebase.database().ref('levelRange').on('value', (snapshot) => {
            levels = snapshot.val();
        })
        if(levels.length === 0) return({level: "0", progress: 0.0})
        let level = 0
        levels.forEach(e => {
            if (user.xp > e) level++
        })

        if(level === 0) return({level: "1", progress: 0.0})
        let progress = (user.xp - levels[level-1]) * 1.0 / (levels[level] - levels[level-1])
        return({level: ""+level, progress: progress})
    }
    catch (e) {
        return({level: "0", progress: 0.0})
    }
}
