import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeAsyncData = async (key, value) => {
    try {
        if(typeof value == 'string')
            await AsyncStorage.setItem(key, value)
        else {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }
    } catch (e) {
        console.error("Error storing data at async storage: key: ", key);
    }
}
