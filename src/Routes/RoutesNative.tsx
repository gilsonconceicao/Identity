import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../Pages/Home/HomeContainer';
import { RegisterContainer } from '../Pages/Register/RegisterContainer';
import { LoginContainer } from '../Pages/Login/LoginContainer';
import { useIdentity } from '../Contexts/IdentiryContext';

const Stack = createNativeStackNavigator();

const RoutesNative = () => {
  const { isLogged } = useIdentity();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
            <Stack.Screen
              name="registerUser"
              options={{ title: "Cadastro", headerShown: false }} component={RegisterContainer}
            />
            <Stack.Screen
              name="loginUser"
              options={{ title: "Entrar", headerShown: false }} component={LoginContainer}
            />
          </>
        ) : (
          <Stack.Screen name="home" options={{ title: "Home" }} component={HomeContainer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesNative
