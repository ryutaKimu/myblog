import React, { FC } from "react";
import { UserType } from "../types/adminType";

// UserTypeをAdmin型に変更しました
export type AuthUserContextType = {
  user: UserType | null;
  signin: (user: UserType, callback: () => void) => void;
  signout: (callback: () => void) => void;
};

const AuthAdminContext = React.createContext<AuthUserContextType>({} as AuthUserContextType);

export const useAuthUserContext = (): AuthUserContextType => {
  return React.useContext<AuthUserContextType>(AuthAdminContext);
};

type Props = {
  children: React.ReactNode;
};

export const AuthUserProvider:FC<Props> = (props) => {
  const [user, setUser] = React.useState<UserType | null>(null);

  const signin = (newUser: UserType, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value: AuthUserContextType = { user, signin, signout };
  return (
    <AuthAdminContext.Provider value={value}>
      {props.children}
    </AuthAdminContext.Provider>
  );
};
