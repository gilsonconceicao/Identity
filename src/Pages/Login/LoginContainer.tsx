import React from 'react'
import { View, Text} from 'react-native'
import { TextField } from '../../Components/TextField/TextField';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { IdentityLoginype } from '../../Services/Identity';
import { useLoginUserMutation } from '../../Hooks/IdentityHook';
import { loginSchemaValidation, loginDefaultValue } from './LoginSchema';
import { Button } from 'react-native-paper';
import { ParamListBase, RouteProp } from '@react-navigation/native';

type LoginContainerProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

export const LoginContainer = ({ navigation, route }: LoginContainerProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchemaValidation()),
    defaultValues: loginDefaultValue
  });

  const onSuccess = (): void => { debugger }

  const onError = (error:any): void => { debugger }

  const { mutate, status } = useLoginUserMutation(onSuccess, onError)

  const onSubmit = (values: IdentityLoginype) => {
    mutate(values);
  };

  return (
    <View style={{  flex: 1, margin: 20, marginTop: 200}}>
      <Text style={{fontSize: 25}}>
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
      <Button
        children="Não tenho conta"
        style={{ marginTop: 15 }}
        onPress={() => navigation.navigate('registerUser')}
      />
      <View style={{ marginTop: 20 }}>
        <Button children='Entrar' mode='contained' onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}
