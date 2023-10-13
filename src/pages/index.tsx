// import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image';
import pokeball from '../../public/images/pokeball.png';
import { pokemon, HomeProps, PokemonAPI } from '../types';

import Card from './components/Card';

export async function getStaticProps() {
  const maxPokemons = 251; 
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  const data = await res.json();
  // add pokemon index

  data.results.forEach((pokemon: pokemon, index: number) => {
    pokemon.id = index + 1;
  });

  return{
    props: {
      pokemons:data.results,
    }
  }
}


export default function Home({ pokemons }: HomeProps) {
  // Cada componente e uma pagina e isso se torna uma url /about, /favorites...
  // Existem tambem os Nested Routes(sao rotas compostas), /product/shirt, pra fazer isso criamos pastas
  // o Head é um elemento do próprio next, onde é possivel trabalhar com metadados
  // as keyworkds são metadados de palavras chave
  return (
      <>
        <div className={styles.title_conteiner}>
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
          <Image src={pokeball} width='50' height='50' alt='Pokebola' />
        </div>
        <div className={styles.pokemons_conteiner}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </>
  )
}
