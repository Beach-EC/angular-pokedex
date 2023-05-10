import { Component, OnInit } from '@angular/core';
import { PokemonDetailsService } from '../service/pokemon-details.service';
import { PokemonDetails } from '../models/PokemonDetails';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: PokemonDetails = {};

  constructor(private pokemonDetailsService: PokemonDetailsService) {}

  ngOnInit() {
    const pokemonName: any = window.location.pathname.split('/')[2];

    this.pokemonDetailsService
      .getPokemonDetails(pokemonName)
      .subscribe((pokemonDetails) => (this.pokemonDetails = pokemonDetails));
  }
}
