import * as yup from "yup"

export const registerSchemaValidation = () => {
  return yup.object({
    username: yup.string().required("Nome de usuário precisa ser preenchido").typeError("Nome de usuário precisa ser preenchido"),
    email: yup.string()
      .required("Email precisa ser preenchido")
      .typeError("Email precisa ser peenchida")
      .email("Email inválido"),
    password: yup.string().required('Senha precisa ser preenchido')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Deve conter 8 caracteres, uma letra maiúscula, uma letra maiúscula, um número e um especial caractere"
      ),
    passwordConfirmation: yup.string().required('Confirmar senha precisa ser preenchido')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Deve conter 8 caracteres, uma letra maiúscula, uma letra maiúscula, um número e um especial caractere"
      )
  })
}

export const registerDefaultValue = {
  username: "",
  passwordConfirmation: "",
  password: "",
  email: ""
}