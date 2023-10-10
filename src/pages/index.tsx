// import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Cada componente e uma pagina e isso se torna uma url /about, /favorites...
  // Existem tambem os Nested Routes(sao rotas compostas), /product/shirt, pra fazer isso criamos pastas
  // o Head é um elemento do próprio next, onde é possivel trabalhar com metadados
  // as keyworkds são metadados de palavras chave
  return (
      <h1>Pokenext</h1>
  )
}
