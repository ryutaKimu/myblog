import React, { FC } from "react";
import { AuthUserProvider } from "../provider/AuthProvider";

type Props = {
  children: React.ReactNode
}

 export const Providers: FC<Props> = (props) => {
  return (
    <>
      <AuthUserProvider>
        {props.children}
      </AuthUserProvider>
    </>
  );
}

