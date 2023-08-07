import PostModelo from 'Componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre Mim'
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Marcos
      </h3>
      <img
        src="https://github.com/MarcosGardinali.png"
        alt='Foto Marcos Gardinali'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Olá! Sou o Marcos Gardinali, desenvolvedor Front-end. Sou formado em ensino médio integrado ao técnico pela ETEC, onde aprendi diversas téconologias na área de programação, como C#, HTML, CSS, MYSQL e Java(Android Studio).
      </p>
      <p className={styles.paragrafo}>
        Como trabalho de conclusão deste curso desenvolvi um sistema para controle de estoque, vendas e compras para uma loja de artigos religiosos, as tecnologias utilizadas neste projeto foram C# para desenvolvimento do software desktop, MYSQL para a criação do banco de dados que integrava com o software e Java no android Studio para o app mobile onde o dono da loja poderia cadastrar seus contatos.
      </p>
      <p className={styles.paragrafo}>
        Atualmente estou terminando meu curso superior em Gestão Empresarial (6/6) e ao término desta formação pretendo iniciar o curso de Análise e Desenvolvimento de Sistemas, ambas as formações da faculdade Fatec.
      </p>
      
    </PostModelo>
  )
}
