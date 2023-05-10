export interface PokemonDetails {
  id?: number;
  name?: string;
  sprites?: Sprites;
  moves?: Move[];
  types?: Type[];
}

interface Sprites {
  front_default: string;
}

interface Move {
  name: string;
}

interface Type {
  name: string;
}
