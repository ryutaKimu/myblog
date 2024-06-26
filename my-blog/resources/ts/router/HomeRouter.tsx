import React from "react"
import Blog from "../components/pages/Blog"
import { Gallery } from "../components/pages/Gallery"
import { useAuth } from "../components/hooks/useAuth"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { NotFound404 } from "../components/pages/NotFound404"
import { Profile } from "../components/pages/Profile"
import { AdminHome } from "../components/Admin/AdminHome"
import { RouteAuthGuard } from "../components/RouteAuthGuard"

export const HomeRouter = [
    {
        path:"/",
        exact: true,
        children: <Home/>
    },

    {
        path:"/admin",
        exact: true,
        children: <Login/>
    },

    {
        path:"/home",
        exact: true,
        children: <Home/>
    },
    
    {
        path:"home/blog",
        exact: true,
        children: <Blog/>
    },
    {
        path:"home/profile",
        exact: true,
        children: <Profile/>
    },
    {
        path:"home/gallery",
        exact: true,
        children: <Gallery/>
    },
    {
        path:"*",
        exact: true,
        children: <NotFound404/>
    },
    {
        path:"/admin/home",
        exact: true,
        children: <RouteAuthGuard component={<AdminHome/>} redirect="/admin"></RouteAuthGuard>
    }
]
