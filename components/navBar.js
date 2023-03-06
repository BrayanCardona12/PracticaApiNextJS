import Link from 'next/link'
import style from '@/styles/Home.module.css'

export default function Nave() {
    return(
        <nav className={style.nav}>
            <Link href='/'>Home</Link>
            <Link href='/users'>Users</Link>
            <Link href='/post'>Post</Link>
        </nav>
    )
}