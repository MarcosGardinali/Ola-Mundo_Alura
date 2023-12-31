import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'Componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NaoEncontrada from 'Paginas/NaoEncontrada'
import PaginaPadrao from 'Componentes/PaginaPadrao'

export default function Post() {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <section className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </section>
                    </PostModelo>
                } />
            </Route>
        </Routes>

    )
}
