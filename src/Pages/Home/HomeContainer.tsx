import React from 'react'
import { View, Text } from 'react-native'
import { clearAsyncStorageData, getAsyncStorageData } from '../../Hooks/AsyncStorageIdentity'
import { Button } from 'react-native-paper'
import { useIdentity } from '../../Contexts/IdentiryContext'

const HomeContainer = () => {
  const { setIsLogged } = useIdentity();

  const handleSignOut = () => {
    clearAsyncStorageData("@identityUser");
    setIsLogged(false);
  }

  return (
    <View>
      <Text>Hello world!</Text>
      <Button
        children="Clear data"
        style={{width: 200}}
        mode='contained'
        onPress={handleSignOut}
      />
    </View>
  )
}

export default HomeContainer
