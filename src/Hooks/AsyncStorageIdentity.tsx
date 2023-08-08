import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSsyncStoreData = async (key: string, values: unknown) => {
  try {
    await AsyncStorage.setItem(`${key}`, JSON.stringify(values))
  } catch (error) {
    console.log({
      error: "Erro ao salvar dados no local storage",
      exception: error
    });
  }
}

export const getAsyncStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log({
      error: "Erro ao salvar dados",
      exception: error
    });
  }
};