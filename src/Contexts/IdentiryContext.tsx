import { useContext, createContext, FC, useState, useEffect } from 'react';
import { getAsyncStorageData, saveSyncStoreData } from '../Hooks/AsyncStorageIdentity';

type User = {
  username: string | null;
  email: string | null;
}

interface IdentityUserType {
  isLogged: boolean;
  currentUser: User;
  signIn: (user: User) => void;
  setIsLogged: (isLogged: boolean) => void;
}

const defaultValuesIdentityUser: IdentityUserType = {
  isLogged: false,
  currentUser: {
    email: null,
    username: null
  },
  signIn: (user: User) => { },
  setIsLogged: (isLogged: boolean) => { }
}

const IdentityUserContext = createContext(defaultValuesIdentityUser);

type IProvider = {
  children: JSX.Element;
}

export const IdentityUserProvider: FC<IProvider> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(currentUser !== null);

  useEffect(() => {
    function asyncDataUser() {
      getAsyncStorageData("@identityUser")
        .then((values) => {
          if (values !== null) {
            setIsLogged(true);
            setCurrentUser(values);
          }
        })
    }
    asyncDataUser();
  }, [currentUser, isLogged]);

  const signIn = (currentUser: User) => {
    saveSyncStoreData("@identityUser", currentUser);
  }

  return (
    <IdentityUserContext.Provider
      value={{
        isLogged,
        currentUser: currentUser!,
        signIn: signIn,
        setIsLogged
      }}
    >
      {children}
    </IdentityUserContext.Provider>
  )
}

export const useIdentity = () => useContext(IdentityUserContext); 
