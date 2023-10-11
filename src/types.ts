export type pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
}

export type pokemonAPI = {
  id: number;
  name: string;
  image: string;
}

export type HomeProps = {
  pokemons: pokemonAPI[];
}
