import {
    BRONZE, BRONZE_IMG,
    DIAMOND,
    DIAMOND_IMG,
    GOLD,
    GOLD_IMG,
    PLATINUM,
    PLATINUM_IMG,
    SILVER,
    SILVER_IMG
} from "../constants/ranks";


export const getLeagueImage = (league) => {
    switch (league) {
        case DIAMOND: return DIAMOND_IMG;
        case PLATINUM: return PLATINUM_IMG;
        case GOLD: return GOLD_IMG;
        case SILVER: return SILVER_IMG;
        case BRONZE: return BRONZE_IMG;
        default: return null;
    }
}
