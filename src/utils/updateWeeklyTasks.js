import firebase from "firebase/app";
import {getFirebaseTasks} from "./getFirebaseTasks";
import {getJiraTasks} from "../api/atlassianapi";
import {getUserFirebaseTasks} from "./getUserFirebaseTasks";

export const updateWeeklyTasks = async (userId) => {
    getJiraTasks().then( async (jiraTasks) => {
        let tasksArr = await getFirebaseTasks();
        let userTasksArr = await getUserFirebaseTasks(userId);
        let lastId = tasksArr[tasksArr.length -1].id

        jiraTasks.data.issues.forEach(el => {
            let contains = false
            let i = -1;
            let id = -1;
            tasksArr.forEach((val,index) => {
                if(val.title === el.fields.summary) {
                    contains = true;
                    i = userTasksArr.findIndex(el => el.id === val.id);
                    id = val.id
                }
            })
            if(!contains) {
                let temp = {};
                temp.id = lastId + 1;
                temp.taskType='weekly';
                temp.title = el.fields.summary
                temp.total = 3;
                temp.type = 'mobile';
                temp.xp = 200;
                tasksArr.push(temp);
                lastId += 1;
            }
        })
        jiraTasks.data.issues.forEach(el => {
            console.log(el.fields.status.statusCategory.name);
            let id = tasksArr.find(val => val.title === el.fields.summary).id
            let completed = 0;
            if(el.fields.status.statusCategory.name === "To do") {
                completed = 0;
            }
            else if(el.fields.status.statusCategory.name === "In Progress"){
                completed = 1;
            }
            else if(el.fields.status.statusCategory.name === "TEST") {
                completed = 2;
            }
            else if(el.fields.status.statusCategory.name === "Done") {
                completed = 3;
            }
            let index = userTasksArr.findIndex(val => val.id === id)
            if(index === -1) {
                let temp2 = {}
                temp2.id = id
                temp2.completed = completed;
                temp2.isClaimed = false
                temp2.isCompleted = false
                temp2.isPinned = true
                userTasksArr.push(temp2);
            }
            else{
                userTasksArr[index].completed = completed;
                console.log(userTasksArr[index])
                console.log(completed)
            }
        })


        firebase.database()
            .ref()
            .update({
                tasks: tasksArr,
            })
            .then(() => console.log('Data updated.'));

        firebase.database()
            .ref('users/' + userId)
            .update({
                tasks: userTasksArr,
            })
            .then(() => console.log('Data updated.'));
    })

}
