import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { PokemonDetails } from '../models/PokemonDetails';

export const POKEMON_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      base_experience
      weight
      height
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  constructor(private apollo: Apollo) {}

  getPokemonDetails(name: String): Observable<PokemonDetails> {
    return this.apollo
      .watchQuery<any>({
        query: POKEMON_DETAILS,
        variables: {
          name,
        },
      })
      .valueChanges.pipe(map((result) => result.data.pokemon));
  }
}
