import {BRONZE, DIAMOND, GOLD, PLATINUM, SILVER} from "../constants/ranks";

export const getLeague = (rank, userCount) => {
    let diamondCount = Math.ceil(userCount * 1.0 / 100);
    let platCount = Math.ceil(userCount * 5.0 / 100) +diamondCount;
    let goldCount = Math.ceil(userCount * 15.0 / 100) + platCount;
    let silverCount = Math.ceil(userCount * 25.0 / 100) + goldCount;
    let bronzeCount = Math.ceil(userCount * 42.0 / 100) + silverCount;
    if(rank <= diamondCount) return DIAMOND
    else if(rank <= platCount) return PLATINUM
    else if( rank <= goldCount) return GOLD
    else if( rank <= silverCount) return SILVER
    else if( rank <= bronzeCount) return BRONZE
    else return -1

}
