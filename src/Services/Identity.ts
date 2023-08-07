import axios from "axios";

const url = `http://192.168.100.123:8080`; 

export type IdentityRegisterType = {
  username: string,
  email: string
  password: string,
  passwordConfirmation: string,
}

export type IdentityLoginype = {
  username: string,
  password: string
}

export async function registerIdentityUser(payload: IdentityRegisterType) {
  debugger; 
  return await axios.post(`${url}/User`, payload); 
}

export async function loginIdentityUser(payload: IdentityLoginype) {
  return await axios.post(`${url}/User/SignIn`, payload); 
}