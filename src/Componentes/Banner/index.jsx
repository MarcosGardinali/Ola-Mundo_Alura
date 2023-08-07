import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
    return (
        <main className={styles.banner}>
            <section className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá mundo
                </h1>
                <p className={styles.paragrafo}>
                    Olá, sou Marcos, sou desenvolvedor Front-end com as tecnologias React, Javascript, HTML e CSS. Sou apaixonado por videogames e tecnologia
                </p>
            </section>

            <section className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto} 
                    src="https://github.com/MarcosGardinali.png"
                    alt='Minha foto'
                />
            </section>
        </main>
    )
}
