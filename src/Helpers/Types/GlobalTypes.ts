import { ParamListBase, RouteProp } from "@react-navigation/native";

export type RoutesNavigation = {
  route: RouteProp<ParamListBase, string>;
  navigate: any;
}

export type IdentityResponseLogin = {
  isSuccess: boolean;
  username: string;
  email: string;
}

