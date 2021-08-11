import AsyncStorage from '@react-native-async-storage/async-storage';

const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const readAsyncData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
           return isJson(value) ? JSON.parse(value) : value;
        }
        console.warn("Data with key " + key + " is not stored");
        return null;
    } catch(e) {
        console.error("Error reading data with key: ", key)
    }
}
