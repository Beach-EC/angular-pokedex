export interface PokemonDetails {
  id?: number;
  name?: string;
  sprites: Sprites;
  abilities?: Ability[];
  types?: Type[];
  base_experience?: string;
  weight?: string;
  height?: string;
}

interface Sprites {
  front_default: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}
