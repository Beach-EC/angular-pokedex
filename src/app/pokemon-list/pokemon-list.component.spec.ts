import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListService } from '../service/pokemon-list.service';
import { of } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  const pokemons: Pokemon[] = [
    {
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      name: 'bulbasaur',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      id: 1,
    },
  ];

  const serviceMock = jasmine.createSpyObj<PokemonListService>(
    'PokemonListService',
    {
      getPokemons: of(pokemons),
    }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      providers: [{ provide: PokemonListService, useValue: serviceMock }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(serviceMock.getPokemons).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
