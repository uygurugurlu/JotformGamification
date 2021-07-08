import {
    LEVELICON1,
    LEVELICON10,
    LEVELICON11,
    LEVELICON12,
    LEVELICON13,
    LEVELICON14,
    LEVELICON15,
    LEVELICON16,
    LEVELICON17,
    LEVELICON18,
    LEVELICON2,
    LEVELICON3,
    LEVELICON4,
    LEVELICON5,
    LEVELICON6,
    LEVELICON7,
    LEVELICON8,
    LEVELICON9
} from "../constants/levelIcons";

export const getLevelImage = (level) => {
    switch (level) {
        case '1' : return LEVELICON1;
        case '2' : return LEVELICON2;
        case '3' : return LEVELICON3;
        case '4' : return LEVELICON4;
        case '5' : return LEVELICON5;
        case '6' : return LEVELICON6;
        case '7' : return LEVELICON7;
        case '8' : return LEVELICON8;
        case '9' : return LEVELICON9;
        case '10' : return LEVELICON10;
        case '11' : return LEVELICON11;
        case '12' : return LEVELICON12;
        case '13' : return LEVELICON13;
        case '14' : return LEVELICON14;
        case '15' : return LEVELICON15;
        case '16' : return LEVELICON16;
        case '17' : return LEVELICON17;
        case '18' : return LEVELICON18;
        default: return 'Error';

    }
}
