import { Pokemon } from './Pokemon';

export interface PokemonsResponse {
  status: boolean;
  message: string;
  results: Pokemon[];
}
