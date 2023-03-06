import Layout from '@/components/layout'
import Tittle from '@/components/tittle'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Timeline({ post }) {

    return (
        <Layout>
            <div>
                <Tittle>Pagina principal del post</Tittle>
                <div className='cont'>
                    {post.map(s => {
                        return (
                            <div className='contDiv' key={s.id}>
                                <Link href={`/post/[id]`} as={`/post/${s.id}`}>
                                    <h3>{s.title}</h3>
                                    <p>{s.body}</p>

                                </Link>
                            </div>
                        )
                    })}
                </div>

                <style jsx >
                    {`
                        .cont {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-wrap: wrap;
                            gap: 20px;
                            font-size: .7em;
                            
                          }

                        .contDiv {
                            width: 100px;
                            background-color: rgba(128, 128, 128, 0.288);
                        }
                    
                    `}
                </style>
            </div>

        </Layout>



    )



}

export async function getServerSideProps() {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const post = await resp.json()

    return {
        props: {
            post
        }
    }
}