import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../Pages/Home/HomeContainer';
import { RegisterContainer } from '../Pages/Register/RegisterContainer';
import { LoginContainer } from '../Pages/Login/LoginContainer';
import { IconButton } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const RoutesNative = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="registerUser"
          options={{
            title: "Cadastro", 
            headerShown: false
          }}

        >
          {(props) =>
            <RegisterContainer
              navigation={props.navigation}
              route={props.route} />
          }
        </Stack.Screen>
        <Stack.Screen
          name="loginUser"
          options={{
            title: "Entrar", 
            headerShown: false
          }}
          component={LoginContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesNative
