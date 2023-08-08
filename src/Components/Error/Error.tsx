import React from 'react'
import { Text } from 'react-native-paper'

type ErrorType = {
  errorMessage: string
}

export const Error: React.FC<ErrorType> = ({ errorMessage }) => {
  return (
    <Text
      children={errorMessage}
      style={{
        backgroundColor: "#ba3c3c",
        color: "white",
        padding: 10,
        borderRadius: 4, 
        marginTop: 20
      }}
    />
  )
}