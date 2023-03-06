import Layout from '@/components/layout'
import Tittle from '@/components/tittle'
import { useRouter } from 'next/router'



export default function Post({ post }) {
    return (
        <Layout>
            
            <div className='cont'>
                <div className='contDiv'>
                <Tittle>Detalles del post</Tittle>
                <h2>{post.title}</h2>
                <p>{post.id}</p>
                <p>{post.body}</p>
                </div>
             
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
                            width: 40%;
                            background-color: rgba(128, 128, 128, 0.288);
                            text-align: center;
                        }
                    
                    `}
                </style>
        </Layout>
        

    )


}



export async function getServerSideProps({ params } ) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.asig}`)
    const post = await res.json()
   

    return { props: { post } }
}

