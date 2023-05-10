import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const POKEMON_DETAILS = gql`
   pokemon(name: $name) {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  constructor() {}
}
