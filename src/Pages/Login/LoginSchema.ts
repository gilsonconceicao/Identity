import * as yup from "yup"

export const loginSchemaValidation = () => {
  return yup.object({
    username: yup.string().required("Nome de usuário precisa ser preenchido").typeError("Nome de usuário precisa ser preenchido"),
    password: yup.string().required('Senha precisa ser preenchido')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Deve conter 8 caracteres, uma letra maiúscula, uma letra maiúscula, um número e um especial caractere"
      )
  })
}

export const loginDefaultValue = {
  username: "",
  password: ""
}