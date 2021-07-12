import {BLUE, DARKBLUE, RED, YELLOW} from "../constants/colors";

const colors = [DARKBLUE, YELLOW, BLUE, RED];

let num = 0;
export const getCardColor = () => {
    num = (num + 1) % colors.length
    return colors[num];

}
