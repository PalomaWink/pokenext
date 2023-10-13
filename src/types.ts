export type pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonAPI {
  id: number;
  name: string;
  url: string;
}

export type HomeProps = {
  pokemons: PokemonAPI[];
}

export type HomeProp = {
  pokemon: PokemonAPI[];
}