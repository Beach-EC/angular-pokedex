import { Component } from '@angular/core';
import { PokemonListService } from '../pokemon-list.service';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonListService: PokemonListService) {}

  getPokemons(): void {
    this.pokemonListService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }
}
