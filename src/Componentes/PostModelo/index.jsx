import React from 'react'
import styles from './PostModelo.module.css'

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContainer}>
        <section className={styles.fotoCapa} style={{backgroundImage: `url(${fotoCapa})`}}>
        </section>
        <h2 className={styles.titulo}>
            {titulo}
        </h2>
        <section className={styles.postConteudoContainer}>
            {children}
        </section>
    </article>
  )
}
