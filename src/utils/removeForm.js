import firebase from "firebase/app";


export const removeForm = (userId, id) => {
    firebase.database().ref().child('users/' + userId + '/forms').on("value", function(snapshot) {
        snapshot.forEach((data) =>{
            if(data.val() === id) {
                firebase.database().ref('users/' + userId + '/forms').child(data.key).remove().then(el => console.log(el))
            }
        })
    });

}
