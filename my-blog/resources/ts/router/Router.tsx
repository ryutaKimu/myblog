import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeRouter } from "./HomeRouter";
import { FC, memo } from "react";

export const Router:FC = memo(()=>{
    return (
      
            <Routes>
               {HomeRouter.map((route,index)=>(
                <Route key={index} path={route.path} element={route.children}/>
               ))}
            </Routes>
    );
});
