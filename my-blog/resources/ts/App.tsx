import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/Router"
import '../scss/app.scss'; // app.scssのファイルパス
import { Providers } from "./components/Provider";


export const App = ()=>{
    return(
        <div className="app">
         <Providers>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
        </Providers>
        </div>
    
    )
}