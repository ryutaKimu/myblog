import Blog from "../components/pages/Blog"
import { Home } from "../components/pages/Home"

export const HomeRouter = [

    {
        path:"/home",
        exact: true,
        children: <Home/>
    },
    
    {
        path:"home/blog",
        exact: false,
        children: <Blog/>
    }
]
