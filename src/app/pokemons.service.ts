import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Pokemon } from './models/Pokemon';
import { Observable, map } from 'rxjs';

const POKEMONS = gql`
  {
    pokemons {
      count
      next
      previous
      nextOffset
      prevOffset
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
export class PokemonsService {
  constructor(private apollo: Apollo) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.apollo
      .watchQuery<any>({
        query: POKEMONS,
      })
      .valueChanges.pipe(map((result) => result.data.pokemons));
  }
}
