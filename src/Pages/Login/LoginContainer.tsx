import React from 'react'
import { View, Text } from 'react-native'
import { TextField } from '../../Components/TextField/TextField';
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from 'react-hook-form';
import { IdentityLoginype } from '../../Services/Identity';
import { useLoginUserMutation } from '../../Hooks/IdentityHook';
import { loginSchemaValidation, loginDefaultValue } from './LoginSchema';
import { Button } from 'react-native-paper';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { IdentityResponseLogin } from '../../Helpers/Types/GlobalTypes';
import { useIdentity } from '../../Contexts/IdentiryContext';
import { Error } from '../../Components/Error/Error';

type LoginContainerProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

export const LoginContainer = ({ navigation, route }: LoginContainerProps) => {

  const { signIn, setIsLogged } = useIdentity();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchemaValidation()),
    defaultValues: loginDefaultValue
  });

  const onSuccess = (formValues: FieldValues) => {
    const { isSuccess, username, email } = formValues.data as IdentityResponseLogin;
    if (isSuccess) {
      signIn({ username, email });
      setIsLogged(true);
      return navigation.navigate('home');
    }
  }

  const onError = (): void => {}

  const { mutate, status } = useLoginUserMutation(onSuccess, onError)

  const onSubmit = (values: IdentityLoginype) => {
    mutate(values);
  };

  return (
    <View style={{ flex: 1, margin: 20, marginTop: 200 }}>
      <Text style={{ fontSize: 25 }}>
        Entrar
      </Text>
      <View style={{ marginTop: 10 }}>
        <TextField
          control={control}
          errors={errors}
          label='Nome de usuário'
          name='username'
          required={true}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <TextField
          control={control}
          errors={errors}
          label='Senha'
          secureTextEntry
          textContentType='password'
          name='password'
          required={true}
        />
      </View>

      {status === 'error' && <Error errorMessage='Ocorreu um erro, verifique as informações ou tente novamente mais tarde.' />}

      <Button
        children="Não tenho conta"
        style={{ marginTop: 15 }}
        onPress={() => navigation.navigate('registerUser')}
      />
      <View style={{ marginTop: 20 }}>
        <Button children='Entrar' disabled={status === 'loading'} mode='contained' onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}
