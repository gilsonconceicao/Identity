import React from 'react'
import { View,Text } from 'react-native'
import { TextField } from '../../Components/TextField/TextField';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { registerDefaultValue, registerSchemaValidation } from './RegisterSchema';
import { IdentityRegisterType } from '../../Services/Identity';
import { useRegisterUserMutation } from '../../Hooks/IdentityHook';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Button } from 'react-native-paper';

type RegisterContainerProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}

export const RegisterContainer = ({ navigation, route }: RegisterContainerProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchemaValidation()),
    defaultValues: registerDefaultValue,
  });

  const onSuccess = (data: IdentityRegisterType): void => { 
    // to-do: implement routine after create user
   }

  const onError = (error: any) => { 
    // to-do: show error
    console.log(error); 
   }

  const { mutate, status, isLoading} = useRegisterUserMutation(onSuccess, onError)

  const onSubmit = (values: IdentityRegisterType) => {
    const { password, passwordConfirmation } = values;
    if (password !== passwordConfirmation) {
      return alert("Senhas não são iguais. :(");
    }
    return mutate(values);
  };

  return (
    <View style={{ flex: 1, margin: 20, marginTop: 100}}>
      <Text style={{fontSize: 25}}>
        Cadastro
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
          label='Email'
          name='email'
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
      <View style={{ marginTop: 10 }}>
        <TextField
          control={control}
          errors={errors}
          label='Confirmar senha'
          secureTextEntry
          name='passwordConfirmation'
          required={true}
        />
      </View>
      <Button
        children="Já tenho conta"
        style={{marginTop: 15}}
        onPress={() => navigation.navigate('loginUser')}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          children='Enviar'
          disabled={isLoading}
          mode='contained'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}
