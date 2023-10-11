import Image from 'next/image';
import styles from '../styles/About.module.css'
import charizard from '../../public/images/charizard.png';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Escrever sobre o projeto e como ele foi desenvolvido</p>
      <Image src={charizard} width="300" height='300' alt='Charizard' />
    </div>
  )
}