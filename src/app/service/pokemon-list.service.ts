import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Pokemon } from '../models/Pokemon';
import { Observable, map } from 'rxjs';

export const POKEMONS = gql`
  query pokemons($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      status
      message
      results {
        url
        name
        image
        artwork
        id
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
        variables: {
          offset: 0,
          limit: 151,
        },
      })
      .valueChanges.pipe(map((result) => result.data.pokemons.results));
  }
}
