// import { Inter } from 'next/font/google';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image';
import pokeball from '../../public/images/pokeball.png';
import { pokemon, HomeProps } from '../types';

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
  console.log(pokemons);
  
  // Cada componente e uma pagina e isso se torna uma url /about, /favorites...
  // Existem tambem os Nested Routes(sao rotas compostas), /product/shirt, pra fazer isso criamos pastas
  // o Head é um elemento do próprio next, onde é possivel trabalhar com metadados
  // as keyworkds são metadados de palavras chave
  return (
      <div>
        <h1>PokeNext</h1>
        <Image src={pokeball} width='50' height='50' alt='Pokebola' />
        <div>
          {pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <p>{pokemon.name}</p>
              <Image src={pokemon.image} width='50' height='50' alt='Pokemon Image' />
            </div>
          ))}
        </div>
      </div>
  )
}
