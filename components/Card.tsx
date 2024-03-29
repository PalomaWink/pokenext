import { PokemonAPI } from "../src/types"
import Image from "next/image";
import Link from "next/link";

import styles from '../src/styles/Card.module.css'

type CardProps = {
  pokemon: PokemonAPI & { name: string }
}

export default function Card({pokemon}: CardProps) {
   
  return (
    <div className={styles.card}>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width='120'
        height='120'
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
        Ver detalhes
      </Link>
    </div>
  )
}