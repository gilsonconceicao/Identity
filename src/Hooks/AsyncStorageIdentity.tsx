import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSyncStoreData = async (key: string, values: unknown) => {
  try {
    await AsyncStorage.setItem(`${key}`, JSON.stringify(values));
  } catch (error) {
    console.log({
      error: "Erro ao salvar dados no local storage",
      exception: error
    });
  }
}

export const getAsyncStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log({
      error: "Erro ao salvar dados no local storage"
    });
  };
};

export const clearAsyncStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log({
      error: "Erro ao salvar dados no local storage"
    })
  }
}