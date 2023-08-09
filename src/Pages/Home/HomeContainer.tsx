import React from 'react'
import { View, Text } from 'react-native'
import { clearAsyncStorageData, getAsyncStorageData } from '../../Hooks/AsyncStorageIdentity'
import { Button } from 'react-native-paper'
import { useIdentity } from '../../Contexts/IdentiryContext'

const HomeContainer = () => {

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ fontSize: 30 }}>Bem vindo!</Text>
    </View>
  )
}

export default HomeContainer
