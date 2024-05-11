import React, { FC } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { RoleType } from "../types/adminType";
import { useAuthUserContext } from "../provider/AuthProvider";

type Props = {
    component: React.ReactNode;
    redirect: string;
    allowroles?: RoleType[];
};

export const RouteAuthGuard: FC<Props> = (props) => {
    const { allowroles, redirect, component } = props;
    const authUser = useAuthUserContext().user;

    let allowRoute = false;
    if (authUser) {
        allowRoute = allowroles ? allowroles.includes(authUser.role) : true;
    }

    if (!allowRoute) {
        return (
            <Navigate
                to={redirect}
                state={{ from: useLocation() }}
                replace={false}
            />
        );
    }

    return <>{component}</>;
};
