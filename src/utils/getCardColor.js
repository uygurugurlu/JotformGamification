import {BLUE, DARKBLUE, RED, YELLOW} from "../constants/colors";

const colors = [DARKBLUE, YELLOW, BLUE, RED];

let num = 0;
export const getCardColor = (id) => {
    if(id === 0) {
        return colors[0];
    }
    if(id){
        return colors[id%colors.length]
    }
    num = (num + 1) % colors.length
    return colors[num];

}
