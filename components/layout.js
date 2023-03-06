import Nave from "./navBar";
import style from '@/styles/Home.module.css'

export default function Layout({children}) {
    return(
        <>
        <Nave/>
        <main className={style.body}>{children}</main>

        </>
    )
}