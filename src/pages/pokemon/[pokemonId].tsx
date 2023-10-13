import { ContextoPokemon, PokemonAPI, PokemonProps } from "@/types";
import Image from "next/image";

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {
  const maxPokemons = 251; 
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  const data = await res.json();

  //precisamos retornar o params com o pokemonId
  const paths = data.results.map((_pokemon: PokemonAPI, index: number) => {
    return {
      params: {
        pokemonId: `${index + 1}`
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: ContextoPokemon) => {
  console.log(context);
  
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();
  return {
    props: {
      pokemon: data,
    }
  }
}

export default function Pokemon({ pokemon }: PokemonProps) {
  console.log(pokemon);
  
  return (
    <div className={styles.pokemon_conteiner}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width='200'
        height='200'
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_conteiner}>
          {pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
        <div className={styles.data_conteiner}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </div>
  )
}