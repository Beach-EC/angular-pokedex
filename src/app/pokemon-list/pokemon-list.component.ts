import { Component } from '@angular/core';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemonName = 'Pikachu';
  constructor() {}
}
