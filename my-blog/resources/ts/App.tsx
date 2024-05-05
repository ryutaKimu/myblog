import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/Router"
import '../scss/app.scss'; // app.scssのファイルパス


export const App = ()=>{
    return(
        <div className="app">
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
        </div>
    
    )
}