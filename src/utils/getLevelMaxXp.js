import firebase from "firebase";


export const getLevelMaxXp = (level) => {
    try {
        let maxXp = 0
        firebase.database().ref('levelRange').on('value', (snapshot) => {
            snapshot.forEach(el => {
                if(parseInt(el.key) === parseInt(level + 1)) {
                    maxXp = el.val()
                }
            })
        })
        return maxXp
    }
    catch (e) {
        return 0
    }

}

