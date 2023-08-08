import { useMutation } from "@tanstack/react-query"
import { IdentityLoginype, IdentityRegisterType, loginIdentityUser, registerIdentityUser } from "../Services/Identity"
import { IdentityResponseLogin } from "../Helpers/Types/GlobalTypes";

export const useRegisterUserMutation = (
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void
) => {
  const { mutate, status, isLoading } = useMutation({
    mutationFn: (values: IdentityRegisterType) => {
      return registerIdentityUser(values);
    },
    onSuccess,
    onError
  });
  return { mutate, status, isLoading };
}

export const useLoginUserMutation = (
  onSuccess?: (response: any) => void,
  onError?: (error: any) => void
) => {
  const { mutate, status } = useMutation({
    mutationFn: (values: IdentityLoginype) => {
      return loginIdentityUser(values);
    },
    onSuccess,
    onError
  });
  return { mutate, status };
}