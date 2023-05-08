import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Pokemon } from './models/Pokemon';
import { Observable, map } from 'rxjs';
import { PokemonsResponse } from './models/PokemonsResponse';

const POKEMONS = gql`
  {
    pokemons {
      status
      message
      results {
        url
        name
        image
        artwork
        id
        dreamworld
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  constructor(private apollo: Apollo) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.apollo
      .watchQuery<any>({
        query: POKEMONS,
      })
      .valueChanges.pipe(map((result) => result.data.pokemons.results));
  }
}
