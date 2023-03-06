import Layout from '@/components/layout'
import Tittle from '@/components/tittle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nave from '../../components/navBar'

export default function Users() {
    const algo = useRouter()
    console.log(algo)
    return (

        <Layout>

            <Tittle>Detalles del usuario</Tittle>

            <h4>ID: {algo.query.user}</h4>
        </Layout>


    )
}