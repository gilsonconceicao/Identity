import React, { FC, useState } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { TextInput, Text, InputModeOptions, TouchableHighlight, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type TextFieldProps = {
  required?: boolean;
  label: string;
  name: string;
  control: any;
  errors?: any;
  type?: InputModeOptions;
  secureTextEntry?: boolean;
  textContentType?:
  'none'
  | 'emailAddress'
  | 'name'
  | 'username'
  | 'password'
  | 'newPassword'
  | undefined;
}

export const TextField: FC<TextFieldProps> = ({
  control,
  label,
  name,
  required,
  secureTextEntry = false,
  errors,
  type = 'text',
  textContentType
}) => {
  const [showValues, setShowValues] = useState<boolean>(true);
  const hasError = Object.keys(errors).length;
  return (
    <>
      <Controller
        control={control}
        rules={{
          required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{ position: "relative" }}>
            <Text style={{ fontSize: 17, marginBottom: 6 }}>{label}</Text>
            <TextInput
              style={{
                backgroundColor: "#e6dfdf",
                color: "#000",
                fontSize: 17,
                padding: 6,
                borderRadius: 5
              }}
              textContentType={textContentType}
              secureTextEntry={showValues && secureTextEntry}

              inputMode={type}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {secureTextEntry &&
              <IconButton
                style={{ position: "absolute", bottom: -6, right: 3, zIndex: 100 }}
                onPress={() => showValues ? setShowValues(false) : setShowValues(true)}
                icon={!showValues ? "eye-off-outline" : "eye-outline"} />
            }
          </View>
        )}
        name={name}
      />
      {hasError > 0 &&
        <Text style={{
          color: "red",
          marginTop: 4,
          marginBottom: 10
        }}>
          {errors[name]?.message}
        </Text>
      }
    </>
  )
}
