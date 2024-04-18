import { FC } from "react"
import Header from "../layouts/Header"
import { Link } from "react-router-dom"

export const Home:FC = ()=>{
    return(
        <>
        <Header/>
        <h1>Homeです</h1>
        <Link to="/home/blog">ブログ</Link>
        </>
    )
}