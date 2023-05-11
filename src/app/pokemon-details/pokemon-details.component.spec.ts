import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetails } from '../models/PokemonDetails';
import { PokemonDetailsService } from '../service/pokemon-details.service';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  const pokemonDetails: PokemonDetails = {
    id: 132,
    name: 'ditto',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    abilities: [
      {
        ability: {
          name: 'limber',
        },
      },
      {
        ability: {
          name: 'imposter',
        },
      },
    ],
    types: [
      {
        type: {
          name: 'normal',
        },
      },
    ],
    base_experience: 101,
    weight: 40,
    height: 3,
  };

  const serviceMock = jasmine.createSpyObj<PokemonDetailsService>(
    'PokemonDetailsService',
    {
      getPokemonDetails: of(pokemonDetails),
    }
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      providers: [{ provide: PokemonDetailsService, useValue: serviceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(serviceMock.getPokemonDetails).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
