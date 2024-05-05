import Blog from "../components/pages/Blog"
import { Gallery } from "../components/pages/Gallery"
import { Home } from "../components/pages/Home"
import { NotFound404 } from "../components/pages/NotFound404"
import { Profile } from "../components/pages/Profile"

export const HomeRouter = [
    {
        path:"/",
        exact: true,
        children: <Home/>
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
    }
]
