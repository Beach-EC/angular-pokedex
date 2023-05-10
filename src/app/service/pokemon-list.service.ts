import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Pokemon } from '../models/Pokemon';
import { Observable, map } from 'rxjs';

const POKEMONS = gql`
  {
    pokemons(offset: 0, limit: 151) {
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
      .valueChanges.pipe(
        map((result) => {
          console.log(result.data.pokemons.results);
          return result.data.pokemons.results;
        })
      );
  }
}
