import Head from 'next/head'
import Nave from '../components/navBar'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Tittle from '@/components/tittle'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })
const route = useRouter
export default function Home() {
  console.log(route)
  return (
    <>
      <Head>
        <title>Devter 🐦</title>
        <meta name="description" content="Info Users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
        <Layout >
          <Tittle>Pagina principal</Tittle>

        </Layout>



   
    </>
  )
}
